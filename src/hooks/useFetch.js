import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(async () => {
    let response = await fetch(url);

    let result = await response.json();
    setData(result);
  }, [url]);

  return { data, error, setData };
};

export default useFetch;
