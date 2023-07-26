import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../components/services/product";
import Loader from "../components/atoms/Loader";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate";
import { useEffect } from "react";

const ProductDetailPage = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const route = useNavigate();
  const { data, error, isLoading,} = useQuery(`product/${id}`, () => 
    getProductById(id)
  );

  const product = data?.data?.response; // ? : 존재하는 지 확인 후 파싱

  useEffect(() => {
    if (!id || error) {
      route("/error");
    }
  }, [id, error, route]);
  
  // product에 우리가 원하는 데이터가 정확하게 존재하느냐?
  // 1. typescript 사용
  // 2. 검증 함수

  return (
    <div>
      {isLoading && <Loader/>}
      {error && <div>{error.message}</div>}
      {data && <div>{product.productName}</div>}
    </div>
  );

}

export default ProductDetailPage;