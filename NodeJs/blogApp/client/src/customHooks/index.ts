// import { ApiData } from "interfaces";
// import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

const useGetData = (url: string) => {
//   const [data, setData] = useState<Array<ApiData>>();
//   useEffect(()=>{
  const fun = async() => {
    return await fetch(url)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        // console.log("Api Hit");

        // setData(json);

        // return json
      });
  };
//   },[url])
  return useQuery<any, Error>("posts", fun);
};

export default useGetData;
