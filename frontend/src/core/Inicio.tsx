import elipse from "@/assets/elipse_tela_de_inicio.png";
import {
  Clock,
  GraduationCap,
  HelpCircle,
  MessageCircle,
  MessageSquare,
} from "lucide-react";
import cliente from "@/assets/imagem_cliente.png";
import { useNavigate } from "react-router-dom";

function Inicio() {
  const navigate = useNavigate();

  return (
    <div className="relative flex h-screen flex-col bg-white">
      <img
        src={elipse}
        alt="Elipse"
        className="absolute -top-10 left-0 z-10 h-auto w-full"
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
              className="flex w-full items-center space-x-4 rounded-lg bg-gray-100 p-3"
              onClick={() => {
                navigate("/chat");
              }}
            >
              <MessageCircle />
              <span>ATENDIMENTO</span>
            </button>
            {/* <button
              className="flex w-full items-center space-x-4 rounded-lg bg-gray-100 p-3"
              onClick={() => {
                navigate("/");
              }}
            >
              <Clock />
              <span>HISTÓRICO</span>
            </button> */}
            <button
              className="flex w-full items-center space-x-4 rounded-lg bg-gray-100 p-3"
              onClick={() => {
                navigate("/");
              }}
            >
              <GraduationCap />
              <span>ÁREA DE APRENDIZADO</span>
            </button>
            <button
              className="flex w-full items-center space-x-4 rounded-lg bg-gray-100 p-3"
              onClick={() => {
                navigate("/");
              }}
            >
              <HelpCircle />
              <span>Ajuda</span>
            </button>
            <button
              className="flex w-full items-center space-x-4 rounded-lg bg-gray-100 p-3"
              onClick={() => {
                navigate("/sugestion");
              }}
            >
              <MessageSquare />
              <span>SUGESTÕES</span>
            </button>
          </nav>
        </div>

        <div className="w-1/3 bg-gray-100 p-8">
          <div className="mb-8 rounded-lg bg-white p-4">
            <h3 className="mb-2 font-semibold">
              VIDEO que muda ao passar o mouse em um texto, fazendo a tradução
              em libras
            </h3>
            <div className="h-40 rounded-lg bg-gray-300"></div>
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
