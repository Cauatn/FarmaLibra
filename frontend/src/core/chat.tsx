import { Button } from "@/components/ui/button";
import { useState } from "react";
import cliente from "@/assets/imagem_cliente.png";
import farmaceutico from "@/assets/imagem_farmaceutico_tr.png";
import Header from "@/components/Header";
import listaDeVideos from "@/db/videos";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

function Chat() {
  const [hoveredVideo, setHoveredVideo] = useState("");

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
              <DialogContent className="flex max-w-fit space-x-4">
                <div className="mx-auto max-w-md space-y-4 p-4">
                  <BotaoAtendimento
                    cor="bg-green-500 hover:bg-green-600"
                    texto="SAUDAÇÕES / ACOLHIMENTO"
                    videoId="cG3UGLZWJzg"
                    onHover={setHoveredVideo}
                  />
                  <BotaoAtendimento
                    cor="bg-red-500 hover:bg-red-600"
                    texto="PRESCRIÇÕES E DOCUMENTOS"
                    videoId="1MuChMVxNOU"
                    onHover={setHoveredVideo}
                  />
                  <BotaoAtendimento
                    cor="bg-yellow-500 hover:bg-yellow-600"
                    texto="PARA QUE SERVE ESSE MEDICAMENTO?"
                    videoId="MEw53FHdulU"
                    onHover={setHoveredVideo}
                  />
                  <BotaoAtendimento
                    cor="bg-orange-500 hover:bg-orange-600"
                    texto="COMO USAR O MEDICAMENTO"
                    videoId="oN6d18fAhrw"
                    onHover={setHoveredVideo}
                  />
                  <BotaoAtendimento
                    cor="bg-purple-500 hover:bg-purple-600"
                    texto="ALERTAS"
                    videoId="xSlB7hv0pjg"
                    onHover={setHoveredVideo}
                  />
                  <div className="rounded-md bg-gray-800 p-4 text-white">
                    <p className="text-sm">
                      AVISO: Não divulgar ou passar a terceiros qualquer
                      informação contida neste sistema.
                    </p>
                  </div>
                </div>
                <div className="h-[400px] w-[1px] bg-gray-400"></div>
                <div>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${hoveredVideo}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </DialogContent>
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

interface AtendimentoProps {
  cor: string;
  texto: string;
  videoId: string;
  onHover: (videoId: string) => void;
}

function BotaoAtendimento({ cor, texto, videoId, onHover }: AtendimentoProps) {
  return (
    <Button
      className={`w-full justify-start ${cor} text-white`}
      variant="ghost"
      onMouseEnter={() => onHover(videoId)}
    >
      {texto}
    </Button>
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
      <img src={farmaceutico} alt="" className="absolute -right-8 top-3 w-10" />
    </div>
  );
}

export default Chat;
