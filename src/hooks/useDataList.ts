import { useCallback, useEffect, useState } from "react";
import requests from "../api/config";
import { TDataListResponse, TGenre, TVideo } from "../models/modelData";

const useDataList = () => {
  const [dataList, setDataList] = useState<TVideo[]>([]);
  const [genreList, setGenreList] = useState<TGenre[]>([]);
  const [dataListError, setDataListError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const getDataList = useCallback(async () => {
    setLoading(true);
    setDataListError(false);
    try {
      const response: TDataListResponse = await requests.get(
        "/XiteTV/frontend-coding-exercise/main/data/dataset.json"
      );
      setGenreList(response.genres);
      setDataList(response.videos);
      setDataListError(false);
    } catch (error) {
      // console.log(`error`, JSON.stringify(error));
      setDataListError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getDataList();
  }, []);

  return {
    dataList,
    genreList,
    dataListError,
    loading,
    getDataList,
  };
};

export default useDataList;
