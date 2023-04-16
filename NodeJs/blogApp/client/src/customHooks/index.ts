// import { IApiData } from "interfaces";
// import React, { useEffect, useState } from "react";
import axios from "axios";
import { IApiData } from "interfaces";
import { useQuery } from "react-query";

const apiClient = axios.create({
  // baseURL: "https://jsonplaceholder.typicode.com/",
  baseURL:"http://localhost:5000/",
  headers: {
    "Content-type": "application/json",
  },
});

const useGetData = (url: string) => {
  //   const [data, setData] = useState<Array<IApiData>>();
  //   useEffect(()=>{
    
  const fun = async (): Promise<any> => {
      return await apiClient.get(url);
  };
  return useQuery<any, Error>("blog", fun);
};

export default useGetData;
