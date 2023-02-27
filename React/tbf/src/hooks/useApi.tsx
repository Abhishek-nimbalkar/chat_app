import {useState,useEffect} from "react";

const useApi=(url:string)=>{
    const [data,setData]=useState<any>([]);
  useEffect(()=>{

    fetch(url)
        .then((res)=>res.json())
        .then((data)=>setData(data))

  },[url]);
  return data;
    
}

export default useApi;