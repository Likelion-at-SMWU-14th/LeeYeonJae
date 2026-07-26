import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

export const clearAuthStorage = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("username");
};

// API 요청에 공통으로 적용되는 기본 설정을 포함한 Axios 인스턴스
const api = axios.create({
  baseURL: API_BASE_URL, // 요청마다 전체 서버 주소를 작성할 필요 없음
  withCredentials: true, // 요청마다 브라우저 쿠키를 함께 전송
});

// 서버로 API 요청을 보내기 전 실행
api.interceptors.request.use((config) => {
  // 저장된 Access Token을 가져옴
  const accessToken = localStorage.getItem("accessToken");

  // Access Token이 있으면 API 요청 헤더에 추가
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

let refreshPromise = null;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status !== 401 ||
      originalRequest?._retry ||
      originalRequest?.url?.includes("/login/")
    ) {
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    try {
      if (!refreshPromise) {
        refreshPromise = axios
          .post(`${API_BASE_URL}/login/refresh/`, {}, { withCredentials: true })
          .then((response) => {
            const newAccessToken =
              response.data.accessToken ?? response.data.access;

            localStorage.setItem("accessToken", newAccessToken);
            return newAccessToken;
          })
          .finally(() => {
            refreshPromise = null;
          });
      }

      const newAccessToken = await refreshPromise;
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (refreshError) {
      clearAuthStorage();
      window.location.replace("/login");
      return Promise.reject(refreshError);
    }
  },
);

export default api;
