export class Message {
    constructor(
      public text: string,
      public sender: string,
      public timestamp: Date = new Date()
    ) {}
}
  