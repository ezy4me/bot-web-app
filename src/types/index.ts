export interface IMessage {
  id: number;
  text: string;
  type: string;
}

export type MessageType = {
  id: number;
  text: string;
  type: string;
};

export type MessagePropsType = {
  messages: {
    id: number;
    text: string;
    type: string;
  };
};

export type MessagesPropsType = {
  messages: Array<MessageType>;
};
