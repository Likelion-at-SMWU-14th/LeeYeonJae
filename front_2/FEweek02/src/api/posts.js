import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// Create
export const createPost = async (newPost) => {
  const { data } = await axios.post(`${BASE_URL}/posts`, newPost);
  return data;
};

// Read
export const fetchPosts = async () => {
  const { data } = await axios.get(`${BASE_URL}/posts`);
  return data;
};

// Update
export const updatePost = async ({ id, ...updatedFields }) => {
  const { data } = await axios.put(`${BASE_URL}/posts/${id}`, updatedFields);
  return data;
};

// Delete
export const deletePost = async (id) => {
  await axios.delete(`${BASE_URL}/posts/${id}`);
  return id;
};
