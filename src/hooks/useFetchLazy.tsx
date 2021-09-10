import { useState } from "react";
import axios from "axios";
import parse from "parse-link-header";
import { HeaderLink } from "types";

function useFetchLazy<T = unknown>() {
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<T>();
  const [navigationLinks, setNavigationLinks] = useState<HeaderLink>();

  const fetchData = async (url: string) => {
    setLoading(true);
    try {
      const result = await axios.get<T>(url);
      const headersLink = parse(result.headers.link);
      setNavigationLinks(headersLink as unknown as HeaderLink);
      setData(result.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };
  return { error, loading, data, fetchData, navigationLinks };
}

export default useFetchLazy;
