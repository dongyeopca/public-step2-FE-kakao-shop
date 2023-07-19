import Container from "../atoms/Container";
import ProductGrid from "../organisms/ProductGrid";
import { useEffect, useRef, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { fetchProducts } from "../../services/product";

const MainProduct = () => {
  const bottomObserverRef = useRef(null);
  const {
    data: products,
    fetchNextPage, // 다음 페이지 가져오기
    hasNextPage, // 다음 페이지 있는지 여부
    isLoading,
    isError,
    error,
  } = useInfiniteQuery(
    ["page"], //쿼리 키, page -> 단일 페이지의 데이터를 가져옴
    ({ pageParam = 0 }) => fetchProducts(pageParam), // fetchProduct로 데이터 가져와서
    {
      getNextPageParam: (lastPage, pages) => {
        // 다음페이지의 매개변수(이전페이지, 모든 페이지) 반환
        // getNextPageParam 함수는 이전 페이지의 데이터를 통해 다음 페이지를 가져오기 위한 매개변수를 계산하고 반환함
        if (lastPage && lastPage.data && lastPage.data.response.length === 0) {
          return undefined;
        }
        return pages.length; //현재까지 가져온 페이지의 수 반환, 이전페이지 확인을 위함
      },
    }
  );

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage && !isLoading) {
          fetchNextPage();
        }
      });
    };

    const io = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    });

    if (bottomObserverRef.current) {
      io.observe(bottomObserverRef.current);
    } // IntersectionObserver를 ref에 연결

    return () => {
      if (bottomObserverRef.current) {
        io.unobserve(bottomObserverRef.current);
        // 컴포넌트가 언마운트될 때 IntersectionObserver를 해제
      }
    };
  }, [fetchNextPage, hasNextPage, bottomObserverRef]);

  return (
    <Container>
      {isError && <p>{error.message}</p>}
      {isLoading ? <p>Loading...</p> : <ProductGrid products={products} />}
      <div ref={bottomObserverRef}></div>
    </Container>
  );
};

export default MainProduct;
