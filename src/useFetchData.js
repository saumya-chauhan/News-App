import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetchData(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (page = 1) => {
    const res = await axios.get(url + "&page=" + page);
    console.log(res);
    return { resData: res.data.articles, totalResults: res.data.totalResults };
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      setIsLoading(true);
      try {
        const { resData, totalResults } = await fetchData();
        let totalData = resData;
        setData(resData);
        let pages = Math.ceil(totalResults / 20) - 1;
        let pageNumber = 2;
        while (pages) {
          const { resData: newData } = await fetchData(pageNumber);
          totalData = [...totalData, ...newData];
          pages--;
          pageNumber++;
        }
        setData(totalData);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };
    fetchDataFromApi();
  }, [url]);

  return { data, setData, error, isLoading };
}
