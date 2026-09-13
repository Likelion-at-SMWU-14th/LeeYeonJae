import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// Create - 회원가입
export const createUser = async (newUser) => {
  const { data } = await axios.post(`${BASE_URL}/users`, newUser);
  return data;
};

// Read - 마이페이지 조회
export const fetchUser = async (userId) => {
  const { data } = await axios.get(`${BASE_URL}/users/${userId}`);
  return data;
};

// Update - 개인정보 수정
export const updateUser = async ({ userId, ...updatedFields }) => {
  const { data } = await axios.put(
    `${BASE_URL}/users/${userId}`,
    updatedFields,
  );
  return data;
};

// Delete - 회원 탈퇴
export const deleteUser = async (userId) => {
  await axios.delete(`${BASE_URL}/users/${userId}`);
  return userId;
};
