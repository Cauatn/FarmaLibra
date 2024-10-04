import { useEffect, useState } from "react";
import Header from "@/components/Header";
import CustomDialog from "@/components/CustomDialog";

import cliente from "@/assets/imagem_cliente.png";
import farmaceutico from "@/assets/imagem_farmaceutico_tr.png";
import { Item, useListVideos } from "@/db/buffer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

function Chat() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/videos/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setVideos(data);
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  return (
    <div className="m-0 flex min-h-screen w-full flex-col bg-[#F4F4F4]">
      <div className="mx-auto flex h-full w-full max-w-7xl flex-col space-y-4">
        <Header showBack />
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
  const [messages, setMessages] = useState<Item[]>([]);
  const { items } = useListVideos();

  useEffect(() => {
    setMessages(items);
  }, [items]);

  return (
    <div className="w-full p-4">
      <div className="chat-messages">
        {messages.map((message, index) =>
          message.action === "Cliente" ? (
            <ClientMessage key={index} message={message} />
          ) : (
            <PharmacistMessage key={index} message={message} />
          ),
        )}
      </div>
    </div>
  );
}

//TODO: ABSTRAIR A MENSAGEM DE FARMACEUTICO E CLIENTE

interface Message {
  action: string;
  message: string;
  videoId: string;
}

function ClientMessage({ message }: { message: Message }) {
  const removeItem = useListVideos((state) => state.removeItem);

  return (
    <div className="relative mb-4 flex items-start justify-start">
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
          message.message
        )}
      </div>
      <Button
        variant="secondary"
        size="icon"
        className="ml-2 rounded-full bg-white"
        onClick={() => removeItem(message.videoId)}
      >
        <X className="size-5" />
        <span className="sr-only">Remover vídeo</span>
      </Button>
    </div>
  );
}

function PharmacistMessage({ message }: { message: Message }) {
  const removeItem = useListVideos((state) => state.removeItem);

  return (
    <div className="relative mb-4 flex items-start justify-end">
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
          message.message
        )}
      </div>
      <img
        src={farmaceutico}
        alt=""
        className="absolute -right-8 top-48 w-10"
      />
      <Button
        variant="secondary"
        size="icon"
        className="ml-2 rounded-full bg-white"
        onClick={() => removeItem(message.videoId)}
      >
        <X className="size-5" />
        <span className="sr-only">Remover vídeo</span>
      </Button>
    </div>
  );
}

export default Chat;
