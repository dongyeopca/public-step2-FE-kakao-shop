import { instance } from "./index";

export const fetchProducts = (page = 0) => {
  return instance.get(`/products?page=${page}`);
};

export const fetchProductFromCursor = (cursor) => {
  return instance.get("/products" + "?cursor=" + cursor);
};

export const getProductById = (id) => {
  if (!id) {
    throw Error("id가 없습니다.");
  }
  return instance.get("/products/" + id);
};