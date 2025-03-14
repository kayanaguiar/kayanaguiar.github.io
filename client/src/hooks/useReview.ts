import { useState, useEffect } from "react";
import { Review } from "../types/review.interface";
import { getReviewByProductId } from "../services/dataService";

export function useReviews(productId: number) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await getReviewByProductId(productId);

      if (response.length > 0) {
        setReviews(response);
      } else {
        setReviews([]); 
      }
    } catch (error) {
      setError("Failed to load reviews");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [productId]);

  return { reviews, loading, error };
}
