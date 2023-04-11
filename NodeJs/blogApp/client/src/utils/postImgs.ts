import Api from "api";
import { toast } from "react-toastify";

const postImg = async (url: string, data: any) => {
  return await Api.post(url, data)
    .then((response) => {
        console.log(response);
      return response;
    })
    .catch((error) => {
      console.log(error);
    //   toast.error(error.response.data.message);
      
      return error.response;
    });
};

export default postImg;
