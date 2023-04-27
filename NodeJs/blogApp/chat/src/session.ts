
const sessions=new Map();

const findSession=(id:any)=>{
    return sessions.get(id);
}
const saveSession=(id:any, session:any)=> {
    sessions.set(id, session);
  }

const findAllSessions=()=>{
    return [...sessions.values()];
  }

  export{findAllSessions,findSession,saveSession}