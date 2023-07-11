import { instance } from "./index";

export const fetchProducts = (page = 0) => {
    return instance, get("/products" + "?page=" + page);
};

export const getProductById = (id) => {
    if (!id) {
        // 에러 처리
        throw Error("id가 필요합니다.");
    }

    return instance.get("/products/" + id);
};
