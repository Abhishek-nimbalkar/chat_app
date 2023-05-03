class MessageStore {
  saveMessage(message: any) {}
  findMessagesForUser(userID: any) {}
  messages: any;
  redisClient:any;
}

class InMemoryMessageStore extends MessageStore {
  constructor() {
    super();
    this.messages = [];
  }

  saveMessage(message: any) {
    this.messages.push(message);
  }

  findMessagesForUser(userID: any) {
    return this.messages.filter(
      ({ from, to }: any) => from === userID || to === userID
    );
  }
}


const CONVERSATION_TTL=24*60*60;

class RedisMessageStore extends MessageStore{
  constructor(redisClient:any){
    super();
    this.redisClient=redisClient;
  }
  
  saveMessage(message: any) {
    const value=JSON.stringify(message);
    this.redisClient
    ?.multi()
    ?.rpush(`messages:${message.from}`,value)
    ?.rpush(`messages:${message.to}`,value)
    ?.expire(`messages:${message.from}`,CONVERSATION_TTL)
    ?.expire(`messages:${message.to}`,CONVERSATION_TTL)
    ?.exec();
  }
  findMessagesForUser(userID: any) {
    return this.redisClient
    ?.lrange(`messages:${userID}`,0,-1)
    ?.then((results:any)=>{
      return results.map((result:any)=>{
        JSON.parse(result);
      })
    })
  }
}
export { InMemoryMessageStore,RedisMessageStore };