import { useEffect, useState } from "react";

/**
 * Fetch data from an API
 *
 * @param {RequestInfo | URL} url
 * @param {RequestInit} options
 * @returns {{data: unknown, loading: boolean, error: unknown}}
 */
export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then(async (response) => {
        return {
          headers: response.headers,
          status: response.status,
          json: await response.json(),
        };
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}
