import elipse from "@/assets/elipse_tela_de_inicio.png";
import {
  Book,
  GraduationCap,
  HelpCircle,
  MessageCircle,
  MessageSquare,
} from "lucide-react";
import cliente from "@/assets/imagem_cliente.png";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import { useState } from "react";

function Inicio() {
  const navigate = useNavigate();
  const [hoverVideoId, setHoverVideoId] = useState("");

  const handleMouseEnter = (videoId: string) => {
    setHoverVideoId(videoId);
  };

  const handleMouseLeave = () => {
    setHoverVideoId("");
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header showBack route="/" />
      <img
        src={elipse}
        alt="Elipse"
        className="absolute -top-10 left-0 h-auto w-full"
      />
      <div className="flex flex-1 items-center">
        <div className="relative flex w-2/3 flex-col space-y-20 p-8">
          <div className="relative inline-flex h-14 w-[360px] items-center justify-between bg-white">
            <div className="h-full w-2 bg-[#FFCD00]"></div>
            <img
              src={cliente}
              alt=""
              className="absolute -top-14 left-0 w-28"
            />
            <p className="ml-20 mr-9 text-2xl font-bold">Bem-Vindo Cliente</p>
          </div>
          <nav className="space-y-4">
            <button
              className="flex w-full items-center space-x-4 rounded-lg bg-gray-100 p-3 hover:bg-gray-200"
              onMouseEnter={() => handleMouseEnter("dQw4w9WgXcQ")}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => {
                navigate("/chat");
              }}
            >
              <MessageCircle />
              <span>ATENDIMENTO</span>
            </button>
            <button
              className="flex w-full items-center space-x-4 rounded-lg bg-gray-100 p-3 hover:bg-gray-200"
              onMouseEnter={() => handleMouseEnter("dQw4w9WgXcQ")}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => {
                navigate("/");
              }}
            >
              <Book />
              <span>Vocabulário farmacêutico bilíngue</span>
            </button>
            <button
              className="flex w-full items-center space-x-4 rounded-lg bg-gray-100 p-3 hover:bg-gray-200"
              onMouseEnter={() => handleMouseEnter("dQw4w9WgXcQ")}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => {
                navigate("/");
              }}
            >
              <GraduationCap />
              <span>ÁREA DE APRENDIZADO</span>
            </button>
            <button
              className="flex w-full items-center space-x-4 rounded-lg bg-gray-100 p-3 hover:bg-gray-200"
              onMouseEnter={() => handleMouseEnter("dQw4w9WgXcQ")}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => {
                navigate("/sugestion");
              }}
            >
              <MessageSquare />
              <span>SUGESTÕES</span>
            </button>
            <button
              className="flex w-full items-center space-x-4 rounded-lg bg-gray-100 p-3 hover:bg-gray-200"
              onMouseEnter={() => handleMouseEnter("dQw4w9WgXcQ")}
              onMouseLeave={() => handleMouseLeave()}
              onClick={() => {
                navigate("/");
              }}
            >
              <HelpCircle />
              <span>Ajuda</span>
            </button>
          </nav>
        </div>

        <div className="w-1/3 bg-gray-100 p-8">
          <div className="mb-8 rounded-lg bg-white p-4">
            <iframe
              src={`https://www.youtube.com/embed/${hoverVideoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-60 w-full"
            ></iframe>
          </div>
          <div>
            <h3 className="mb-4 font-semibold">Notícias</h3>
            <div className="rounded-lg bg-white p-4">
              <img
                src="/placeholder.svg"
                alt="Libras news"
                width={100}
                height={100}
                className="mb-2"
              />
              <p className="text-sm">Notícia 1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
