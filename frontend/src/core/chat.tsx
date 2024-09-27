import { useState } from "react";
import Header from "@/components/Header";
import listaDeVideos from "@/db/videos";
import CustomDialog from "@/components/CustomDialog";

import cliente from "@/assets/imagem_cliente.png";
import farmaceutico from "@/assets/imagem_farmaceutico_tr.png";

function Chat() {
  return (
    <div className="h-full bg-[#F4F4F4]">
      <div className="mx-auto h-full max-w-7xl space-y-4">
        <Header />
        <main className="relative flex flex-col items-center space-y-8">
          <div className="z-20 flex h-20 w-[766px] items-center justify-center rounded-2xl bg-white font-bold">
            ATENDIMENTO
          </div>
          <div className="inline-flex w-full justify-between">
            <CustomDialog type="Cliente" />
            <CustomDialog type="Farmaceutico" />
          </div>
          <ChatArea />
        </main>
      </div>
    </div>
  );
}

function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const matchedVideo = listaDeVideos.find(
        (video) => video.texto.toLowerCase() === input.toLowerCase(),
      );

      if (matchedVideo) {
        setMessages([
          ...messages,
          {
            sender: matchedVideo.userType,
            content: matchedVideo.texto,
            videoId: matchedVideo.videoId,
          },
        ]);
      } else {
        setMessages([
          ...messages,
          { sender: "client", content: input, videoId: "" },
        ]);
      }

      setInput("");
    }
  };

  return (
    <div className="w-full p-4">
      <div className="chat-messages">
        {messages.map((message, index) =>
          message.sender === "client" ? (
            <ClientMessage key={index} message={message} />
          ) : (
            <PharmacistMessage key={index} message={message} />
          ),
        )}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className="mt-4 w-full rounded border p-2"
        placeholder="Digite sua mensagem..."
      />
    </div>
  );
}

interface Message {
  sender: string;
  content: string;
  videoId: string;
}

function ClientMessage({ message }: { message: Message }) {
  return (
    <div className="relative mb-4 flex items-center justify-start">
      <img src={cliente} alt="" className="absolute -left-8 top-3 w-10" />
      <div className="rounded-lg bg-white p-2">
        {message.videoId ? (
          <iframe
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${message.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${message.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          message.content
        )}
      </div>
    </div>
  );
}

function PharmacistMessage({ message }: { message: Message }) {
  return (
    <div className="relative mb-4 flex items-center justify-end">
      <div className="rounded-lg bg-[#FFCD00] p-2">
        {message.videoId ? (
          <iframe
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${message.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${message.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          message.content
        )}
      </div>
      <img
        src={farmaceutico}
        alt=""
        className="absolute -right-8 top-48 w-10"
      />
    </div>
  );
}

export default Chat;
