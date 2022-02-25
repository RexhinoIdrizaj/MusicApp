import { useEffect, useState } from "react";
import requests from "../api/config";
import { TDataListResponse, TGenre, TVideo } from "../models/modelData";

const useDataList = () => {
  const [dataList, setDataList] = useState<TVideo[]>([]);
  const [genreList, setGenreList] = useState<TGenre[]>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const getDataList = async () => {
      try {
        const response: TDataListResponse = await requests.get(
          "/XiteTV/frontend-coding-exercise/main/data/dataset.json"
        );
        setGenreList(response.genres);
        setDataList(response.videos);
        setError(false);
      } catch (error) {
        console.log(`error`, JSON.stringify(error));
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getDataList();
  }, []);

  return {
    dataList,
    genreList,
    error,
    loading,
  };
};

export default useDataList;
