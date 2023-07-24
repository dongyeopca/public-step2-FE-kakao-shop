import { cartsInstance } from "./index";

/**
 * 장바구니 담기 
 * @param {object} payload 
 * @returns instance.post("/cart/add")
 */
export const addCart = (payload) => {
  return cartsInstance.post("/carts/add", payload)
}
export const getCart = async() => {
  return await cartsInstance.get("/carts")
}
export const updateCart = (items) => {
  return cartsInstance.get("/carts/update", items)
}
export const orderCart = (item)=>{
  return cartsInstance.post("/orders/save", item)
}