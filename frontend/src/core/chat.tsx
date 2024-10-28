import { useEffect, useState } from "react";
import Header from "@/components/Header";
import CustomDialog from "@/components/CustomDialog";

import cliente from "@/assets/imagem_cliente.png";
import farmaceutico from "@/assets/imagem_farmaceutico_tr.png";
import { Item, useDialogState, useListVideos } from "@/db/buffer";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/dialogChat";
import { DialogDescription } from "@/components/ui/dialog";

function Chat() {
  //const [, setVideos] = useState([]);
  const { isOpen } = useDialogState();

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/videos/")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setVideos(data);
  //     })
  //     .catch((error) => console.error("Error fetching videos:", error));
  // }, []);

  return (
    <div className="m-0 flex min-h-screen w-full flex-col bg-[#F4F4F4]">
      <Header showBack route="/inicio" />
      <div className="mx-auto mt-8 flex h-full w-full max-w-7xl flex-col space-y-4">
        <Dialog open={isOpen}>
          <DialogContent
            aria-describedby="explicacao"
            className="h-[70%] max-h-full w-[80%] max-w-full border-none bg-black p-3"
          >
            <DialogTitle className="hidden">Explicação</DialogTitle>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <DialogDescription className="hidden"></DialogDescription>
          </DialogContent>
        </Dialog>
        <main className="relative flex flex-col items-center space-y-16">
          <div className="z-0 flex h-20 w-[75%] items-center justify-center rounded-2xl bg-white font-bold lg:w-[766px]">
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
    <div className="w-full p-4 px-10 lg:mx-0">
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
