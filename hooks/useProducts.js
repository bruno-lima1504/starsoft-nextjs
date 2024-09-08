import { useQuery } from "react-query";
import { api } from "../services/api";

const fetchProducts = async (page = 1) => {
  const response = await api.get(`/products?page=${page}`);
  return {
    products: response?.data?.data,
    metadata: response?.data?.metadata,
  };
};

export function useProducts(page) {
  return useQuery({
    queryFn: () => fetchProducts(page),
    queryKey: ["products", page],
    keepPreviousData: false,
  });
}
