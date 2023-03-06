import { instance } from "appLayer/axiosInstance";
import { useGet } from "appLayer/useGet";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { ProductType } from "store/Slice";


let count=0;
const LoginPage2 = () => {
  const [productData, setProductData] = useState<ProductType[] | null>(null);

  const { data, isLoading } = useQuery("products", async () => {
      return await instance("products");
    });
    
    
    
    useEffect(() => {
        count +=1;
    console.log("est")
    if (data) setProductData(data.data);
  }, [data]);

  if(isLoading) return <p> Loading... </p>

  return (
    <div>        
      {productData &&
        productData.map((item, index) => (
          <div key={index}>
            <p>{item.title}</p>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <p>{item.image}</p>
          </div>
        ))}

        <div>
            count: {count}
        </div>
    
    </div>
  );
};

export default LoginPage2;
