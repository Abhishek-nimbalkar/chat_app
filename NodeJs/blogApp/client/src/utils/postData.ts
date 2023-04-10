import Api from "api";
import { promises } from "fs";
import { toast } from "react-toastify";

const postData = async (url: string, data: any) => {
  return await Api.post(url, data)
    .then((response) => {
        console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
      
      return error.response;
    });
};

export default postData;
