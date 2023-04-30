class MessageStore {
  saveMessage(message: any) {}
  findMessagesForUser(userID: any) {}
  messages: any;
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

export { InMemoryMessageStore };
