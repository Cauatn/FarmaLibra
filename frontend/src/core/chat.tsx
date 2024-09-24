import { Button } from "@/components/ui/button";
import { useState } from "react";
import elipse from "@/assets/elipse_tela_de_inicio.png";

import cliente from "@/assets/imagem_cliente.png";
import farmaceutico from "@/assets/imagem_farmaceutico_tr.png";

function Chat() {
  return (
    <div className="h-full bg-[#F4F4F4]">
      <div className="mx-auto h-full max-w-7xl">
        <header>asdasd</header>
        <main className="relative flex flex-col items-center">
          <div className="z-20 flex h-20 w-[766px] items-center justify-center bg-white font-bold">
            ATENDIMENTO
          </div>
          <div className="inline-flex w-full justify-between">
            <div className="relative inline-flex h-14 w-[260px] items-center justify-between bg-white">
              <div className="h-full w-2 bg-[#FFCD00]"></div>
              <img
                src={cliente}
                alt=""
                className="absolute -top-14 left-4 w-28"
              />
              <p className="mr-9 text-xl font-bold">Cliente</p>
            </div>
            <div className="relative inline-flex h-14 w-[260px] items-center bg-white">
              <div className="h-full w-2 bg-[#FFCD00]"></div>
              <p className="ml-2 text-xl font-bold">Farmacêutico(A)</p>
              <img
                src={farmaceutico}
                alt=""
                className="absolute -top-14 right-0 w-28"
              />
            </div>
          </div>
          <ChatArea />
        </main>
      </div>
    </div>
  );
}

function ChatArea() {
  const [messages, setMessages] = useState([
    { sender: "client", content: "Hello, I have a question." },
    { sender: "pharmacist", content: "Hi there, how can I assist you?" },
  ]);

  const sendMessage = (content) => {
    setMessages([...messages, { sender: "client", content }]);
  };

  return (
    <div className="w-full p-4">
      {messages.map((message, index) =>
        message.sender === "client" ? (
          <ClientMessage key={index} message={message.content} />
        ) : (
          <PharmacistMessage key={index} message={message.content} />
        ),
      )}
      <input
        type="text"
        onKeyPress={(e) => e.key === "Enter" && sendMessage(e.target.value)}
        className="mt-4 w-full rounded border p-2"
      />
    </div>
  );
}

function ClientMessage({ message }) {
  return (
    <div className="mb-4 flex items-center justify-start">
      <img src="/client-avatar.png" alt="Client" className="mr-2 h-10 w-10" />
      <div className="rounded-lg bg-white p-2">{message}</div>
    </div>
  );
}

function PharmacistMessage({ message }) {
  return (
    <div className="mb-4 flex items-center justify-end">
      <div className="rounded-lg bg-[#FFCD00] p-2">{message}</div>
      <img
        src="/pharmacist-avatar.png"
        alt="Pharmacist"
        className="ml-2 h-10 w-10"
      />
    </div>
  );
}

export default Chat;
