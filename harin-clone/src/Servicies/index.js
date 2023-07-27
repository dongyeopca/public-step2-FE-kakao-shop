import axios from "axios";
import { useNavigate } from "react-router-dom";

const instance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL, -> 이렇게 하니까 인식을 못하는 것 같은데...?
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

const Navigate = () => {
  useNavigate();
};

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});

//middleware
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.status >= 300 && error.status < 400) {
      console.log("리다이렉션");
    } else if (error.response.status === 404) {
      console.log("페이지를 찾을 수 없습니다");
      throw error;
    } else if (error.status < 500) {
      console.log("클라이언트 오류");
    } else if (error.status < 600) {
      console.log("서버 오류");
    }
    return error.message;
  }
);

export { instance };