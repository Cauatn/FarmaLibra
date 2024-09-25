import { Button } from "@/components/ui/button";
import { useState } from "react";
import elipse from "@/assets/elipse_tela_de_inicio.png";

import cliente from "@/assets/imagem_cliente.png";
import farmaceutico from "@/assets/imagem_farmaceutico_tr.png";
import Header from "@/components/Header";
import listaDeVideos from "@/db/videos";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

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
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative inline-flex h-14 w-[260px] items-center justify-between bg-white hover:cursor-pointer">
                  <div className="h-full w-2 bg-[#FFCD00]"></div>
                  <img
                    src={cliente}
                    alt=""
                    className="absolute -top-14 left-4 w-28"
                  />
                  <p className="mr-9 text-xl font-bold">Cliente</p>
                </div>
              </DialogTrigger>
              <DialogContent>asasd</DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative inline-flex h-14 w-[260px] items-center bg-white hover:cursor-pointer">
                  <div className="h-full w-2 bg-[#FFCD00]"></div>
                  <p className="ml-2 text-xl font-bold">Farmacêutico(A)</p>
                  <img
                    src={farmaceutico}
                    alt=""
                    className="absolute -top-14 right-0 w-28"
                  />
                </div>
              </DialogTrigger>
              <DialogContent>asasd</DialogContent>
            </Dialog>
          </div>
          <ChatArea />
        </main>
      </div>
    </div>
  );
}

function ChatArea() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
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
        setMessages([...messages, { sender: "client", content: input }]);
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

function ClientMessage({ message }) {
  return (
    <div className="relative mb-4 flex items-center justify-start">
      <img src={cliente} alt="" className="absolute -left-8 top-3 w-10" />
      <div className="rounded-lg bg-white p-2">
        {message.videoId ? (
          <iframe
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${message.videoId}`}
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

function PharmacistMessage({ message }) {
  return (
    <div className="relative mb-4 flex items-center justify-end">
      <div className="rounded-lg bg-[#FFCD00] p-2">
        {message.videoId ? (
          <iframe
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${message.videoId}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          message.content
        )}
      </div>
      <img src={farmaceutico} alt="" className="absolute -right-8 top-3 w-10" />
    </div>
  );
}

export default Chat;
