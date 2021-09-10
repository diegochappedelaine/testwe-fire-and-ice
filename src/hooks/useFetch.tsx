import { useState, useEffect } from "react";
import axios from "axios";

function useFetch<T>(url: string) {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>();

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const result = await axios.get<T>(url);
        setData(result.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };
    fetchDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { error, loading, data };
}

export default useFetch;
