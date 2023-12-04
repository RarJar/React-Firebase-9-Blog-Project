import { useState, useEffect } from "react";

function useDataFetch(url) {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    let abortController = new AbortController();
    let signal = abortController.signal;

    fetch(url, { signal })
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });

    // Cleanup Function
    return () => {
      abortController.abort();
    };
  }, [url]);

  return { data, loading };
}

export default useDataFetch;
