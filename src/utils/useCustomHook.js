// creating custom hook
import { useEffect, useState } from "react";

function useCustomHook(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetching data using async await function
    const fetchProductData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [url]);
  return { data, error, loading };
}
export default useCustomHook;
