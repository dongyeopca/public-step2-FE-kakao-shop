import axios from 'axios';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

const useGetProductsQuery = () => {
  const MAX_PAGE = 1;
  const fetcher = ({ pageParam = 0 }) =>
    axios
      .get('/products', { params: { page: pageParam } })
      .then(({ data }) => data.response)
      .catch((error) => {
        throw error;
      });

  return useInfiniteQuery({
    queryKey: ['products'],
    queryFn: fetcher,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length > MAX_PAGE) return undefined;
      return allPages.length;
    },
  });
};

const useGetProductQuery = (id: number) => {
  const fetcher = () =>
    axios
      .get(`/products/${id}`)
      .then(({ data }) => data.response)
      .catch((error) => {
        throw error;
      });

  return useQuery({
    queryKey: ['product'],
    queryFn: fetcher,
  });
};

export { useGetProductsQuery, useGetProductQuery };
