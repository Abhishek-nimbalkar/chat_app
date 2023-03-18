import { instance } from "appLayer/axiosInstance";
import { useEffect, useState } from "react";

import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { ProductType, UserType } from "store/Slice";

export const useGet = (props: string): any => {
  console.log("Api hit ");
  //    const  ProductPersitData:UserType[]=useSelector((state:any)=>state.Products);

  const [data, setData] = useState();

  // console.log(props);
  useEffect(() => {
    const fetchApi = async () => {
      const apiData=await instance.get(props);
      setData(apiData.data);
      // console.log("UseEffect inside api ",apiData.data);
    };
    fetchApi();
    
    
  }, [props]);

  // const data=async()=>await(instance.get(props));
  
  return useQuery(props, data);
};
