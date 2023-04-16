import Api from "api";


const getData = async (skip:number) => {
  
  return await Api.get(`posts/${skip}`);

}

export default getData