import Api from "api";
import { promises } from "fs";
import { toast } from "react-toastify";
const getSinglePostData = async (url: string) => {
  return await Api.get(url,{
    headers: {
      'Content-Type': 'application/json',
      "Authorization" : localStorage.getItem("token")
    }})
    // .then((response) => {
    //     // console.log(response.data);
    // //   return response.data;
    // })
    // .catch((error) => {
    //   console.log(error.response.data.message);
    //   toast.error(error.response.data.message);
      
    // //   return error.response;
    // });
};

export default getSinglePostData;