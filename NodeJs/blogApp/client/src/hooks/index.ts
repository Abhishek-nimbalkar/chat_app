// import { IApiData } from "interfaces";
// import React, { useEffect, useState } from "react";
import Api from "api";
import axios from "axios";
import { IApiData } from "interfaces";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import getSinglePostData from "utils/getPost";

// const apiClient = axios.create({
//   // baseURL: "https://jsonplaceholder.typicode.com/",
//   baseURL:"http://localhost:5000/",
//   headers: {
//     "Content-type": "application/json",
//   },
// });

const useGetData = (url: string) => {
    
  const fun = async (): Promise<any> => {
    console.log('Api is Hit ')
    return await Api.get(url,{
      headers: {
        'Content-Type': 'application/json',
        "Authorization" : localStorage.getItem("token")
      }});
      // .then((response) => {
      //     // console.log(response.data);
      //   // return response.data;
      // })
      // .catch((error) => {
      //   console.log(error.response.data.message);
      //   toast.error(error.response.data.message);
        
      //   return error.response;
      // });
  };
  return useQuery<any, Error>("blog", fun);
};

export default useGetData;
