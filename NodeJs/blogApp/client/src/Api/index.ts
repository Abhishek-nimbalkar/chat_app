import axios from "axios";

// import dotenv from "dotenv"
// dotenv.config({path: path.resolve(process.cwd(), `../.env`) });
// console.log('process.env.BASE_URL_BLOG_SERVER',process.env.REACT_APP_BASE_URL_CHAT_SERVER)
const Api=axios.create({
    
    baseURL:process.env.REACT_APP_BASE_URL_BLOG_SERVER
})

export default Api