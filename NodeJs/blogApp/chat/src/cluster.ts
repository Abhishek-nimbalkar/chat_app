import cluster from "cluster";
import http from "http"

import {setupMaster} from "@socket.io/sticky"

const WORKERS_COUNT = 2;

if(cluster.isPrimary){
    console.log(`Primary ${process.pid} is running`); 

for(let i =0;i<WORKERS_COUNT;i++){
    cluster.fork()
}
cluster.on("exit",(worker)=>{
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
})
const httpServer =http.createServer();
setupMaster(httpServer,{
    loadBalancingMethod:"least-connection",
});

const PORT=process.env.CHAT_APP_PORT || 5001;

httpServer.listen(PORT,()=>{
    console.log("Server has started on http://localhost:5001");
});
}else{
    console.log(`Worker ${process.pid} started`);
    require("./server.ts")
    
}
