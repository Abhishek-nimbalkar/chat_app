import Api from "api";

import { toast } from "react-toastify";
const getUser = async (url: string) => {
   const data= await Api.get(url,{
    headers: {
      'Content-Type': 'application/json'
    }})
    .then((response) => {
        // console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
      
    //   return error.response;
    });
    return data;
};

export default getUser;