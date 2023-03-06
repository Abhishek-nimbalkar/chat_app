import axios from "axios"
import cheerio from 'cheerio';
const url:string="https://school.careers360.com/schools/government-schools-in-chandigarh";
const AxiosInstance=axios.create();

AxiosInstance.get(url)
.then(res=>{
    const html=res.data;
    const $ = cheerio.load(html);
    const statsTable: any = $('.headingBox');
    const ArrayOfSchools:any= [];
    statsTable.map((idx:any,ele:any)=>{ArrayOfSchools.push($(ele).text());
    })
    console.log(ArrayOfSchools);
    
}).catch(console.error);

