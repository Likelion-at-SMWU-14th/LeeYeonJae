import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000";

// 브라우저 localStorage에 저장해둔 Access Token과 username를 제거
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

// 토큰 재발급 진행 상태를 저장하는 변수
let refreshPromise = null;

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // 401이 아니거나,
    // 이미 재시도한 요청이거나,
    // 로그인 요청에서 발생한 에러일 경우 재발급하지 않고 에러 처리
    if (
      error.response?.status !== 401 ||
      originalRequest?._retry ||
      originalRequest?.url?.includes("/login/")
    ) {
      return Promise.reject(error);
    }

    // 토큰 재발급 요청을 이미 시도했음을 표시(동일한 요청의 반복 방지)
    originalRequest._retry = true;

    try {
      if (!refreshPromise) {
        refreshPromise = axios
          // 쿠키에 저장된 Refresh Token으로 서버에 새 Access Token을 요청
          .post(`${API_BASE_URL}/login/refresh/`, {}, { withCredentials: true })
          .then((response) => {
            // 서버 응답에서 새 Access Token을 가져옴
            const newAccessToken =
              response.data.accessToken ?? response.data.access;

            // 새 Access Token을 브라우저 localStorage에 저장
            localStorage.setItem("accessToken", newAccessToken);
            return newAccessToken;
          })
          .finally(() => {
            // 토큰 재발급이 완료되었으므로 진행 상태 초기화
            refreshPromise = null;
          });
      }

      const newAccessToken = await refreshPromise;

      // 재발급 받은 Access Token으로 기존 인증 정보를 업데이트
      originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

      // 새 Access Token을 사용해 실패한 기존 요청을 다시 전송
      return api(originalRequest);
    } catch (refreshError) {
      // 토큰 재발급에 실패하면 브라우저 localStorage에 저장된 정보를 삭제하고 로그인 화면으로 이동
      clearAuthStorage();
      window.location.replace("/login");
      return Promise.reject(refreshError);
    }
  },
);

export default api;
