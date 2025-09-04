import React from "react";
import Chat from "./Chat";

export default function ChatContainer({ chats }) {
  return chats.map(c => <Chat data={c} key={c._id} />)
}