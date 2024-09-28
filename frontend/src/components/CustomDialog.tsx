import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import cliente from "@/assets/imagem_cliente.png";
import farmaceutico from "@/assets/imagem_farmaceutico_tr.png";
import { useState } from "react";
import listaDeVideos from "@/db/videos";
import { useActionStore } from "@/db/buffer";

//TODO: ABSTRAIR OS BOTOES JUNTO COM CORES PARA UM HOOK

function CustomDialog({ type }: { type: string }) {
  const [hoveredVideo, setHoveredVideo] = useState("");
  const { setAction } = useActionStore();

  return (
    <Dialog>
      <DialogTitle className="hidden"></DialogTitle>
      <DialogTrigger
        asChild
        onClick={() => {
          setAction(type);
        }}
      >
        {type == "Cliente" ? (
          <div className="relative inline-flex h-14 w-[260px] items-center justify-between bg-white hover:cursor-pointer">
            <div className="h-full w-2 bg-[#FFCD00]"></div>
            <img
              src={cliente}
              alt=""
              className="absolute -top-14 left-4 w-28"
            />

            <p className="mr-9 text-xl font-bold">{type}</p>
          </div>
        ) : (
          <div className="relative inline-flex h-14 w-[260px] items-center bg-white hover:cursor-pointer">
            <div className="h-full w-2 bg-[#FFCD00]"></div>
            <p className="ml-2 text-xl font-bold">Farmacêutico(A)</p>
            <img
              src={farmaceutico}
              alt=""
              className="absolute -top-14 right-0 w-28"
            />
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="flex max-w-fit space-x-4">
        <div className="mx-auto max-w-md space-y-4 p-4">
          <BotaoAtendimento
            texto="SAUDAÇÕES / ACOLHIMENTO"
            category="c1"
            videoId="cG3UGLZWJzg"
            onHover={setHoveredVideo}
          />
          <BotaoAtendimento
            texto="PRESCRIÇÕES E DOCUMENTOS"
            category="c2"
            videoId="1MuChMVxNOU"
            onHover={setHoveredVideo}
          />
          <BotaoAtendimento
            cor="bg-yellow-500 hover:bg-yellow-600"
            texto="PARA QUE SERVE ESSE MEDICAMENTO?"
            category="c3"
            videoId="MEw53FHdulU"
            onHover={setHoveredVideo}
          />
          <BotaoAtendimento
            texto="COMO USAR O MEDICAMENTO"
            category="c4"
            videoId="oN6d18fAhrw"
            onHover={setHoveredVideo}
          />
          <BotaoAtendimento
            texto="ALERTAS"
            category="c5"
            videoId="xSlB7hv0pjg"
            onHover={setHoveredVideo}
          />
          <BotaoAtendimento
            texto="ORIENTAÇÕES GERAIS E FINALIZAÇÃO DO ATENDIMENTO"
            category="c6"
            videoId="xSlB7hv0pjg"
            onHover={setHoveredVideo}
          />
          <div className="rounded-md bg-gray-800 p-4 text-white">
            <p className="text-sm">
              AVISO: Não divulgar ou passar a terceiros qualquer informação
              contida neste sistema.
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
  );
}

interface AtendimentoProps {
  texto: string;
  videoId: string;
  category: string;
  onHover: (videoId: string) => void;
}

import { useNavigate } from "react-router-dom";

function BotaoAtendimento({
  texto,
  videoId,
  category,
  onHover,
}: AtendimentoProps) {
  const navigate = useNavigate();
  const { setCategory } = useActionStore();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={`w-full justify-start ${
            category === "c1"
              ? "bg-[#95CC92]"
              : category === "c2"
                ? "bg-[#92AEE4]"
                : category === "c3"
                  ? "bg-[#F6B1EB]"
                  : category === "c4"
                    ? "bg-[#FFAD54]"
                    : category === "c5"
                      ? "bg-[#F26661]"
                      : category === "c6"
                        ? "bg-[#C1C1C1]"
                        : ""
          } text-black`}
          variant="ghost"
          onMouseEnter={() => onHover(videoId)}
          onClick={() => {
            setCategory(category);
            navigate("/category");
          }}
        >
          {texto}
        </Button>
      </DialogTrigger>
      <DialogContent className="inline-flex min-h-[80%] max-w-[80%] flex-row flex-wrap space-x-2">
        {listaDeVideos.map((lista, index) =>
          lista.categoria == "c1" ? (
            <iframe
              key={index}
              width="100"
              height="100"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
              title={`Video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : null,
        )}
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
