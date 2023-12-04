import { useState, useEffect } from "react";

function useDataFetch(url, method = "GET") {
  let [data, setData] = useState(null);
  let [newData, createData] = useState(null);
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    let abortController = new AbortController();
    let signal = abortController.signal;

    let fetchData = () => {
      fetch(url, { signal })
        .then((res) => res.json())
        .then((json) => {
          setData(json);
          setLoading(false);
        });
    };

    if (method === "GET") {
      fetchData();
    }

    if (method === "POST" && newData) {
      fetch("http://localhost:3001/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      fetchData();
    }

    // Cleanup Function
    return () => {
      abortController.abort();
    };
  }, [url, newData, method]);

  return { createData, data, loading };
}

export default useDataFetch;
