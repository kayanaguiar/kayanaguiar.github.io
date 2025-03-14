import { useState, useEffect } from "react";
import { getProductById } from "../services/dataService";
import { Product } from "../types/product.interface";

export function useProduct(productId: number) {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getProductById(productId);
      if (response) {
        setProduct(response);
      }
    } catch (error) {
      setError("Failed to load product");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return { product, loading, error };
}
