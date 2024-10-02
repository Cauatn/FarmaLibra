import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import cliente from "@/assets/imagem_cliente.png";
import farmaceutico from "@/assets/imagem_farmaceutico_tr.png";
import { useEffect, useState } from "react";
import { useActionStore } from "@/db/buffer";
import { BotaoAtendimento } from "./BotaoAtendimento";
import { categories } from "@/lib/categories";

function CustomDialog({ type }: { type: string }) {
  const [hoveredVideo, setHoveredVideo] = useState("");
  const { setAction } = useActionStore();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => console.log(isOpen), [isOpen]);

  return (
    <Dialog open={isOpen}>
      <DialogTitle className="hidden"></DialogTitle>
      <DialogTrigger
        asChild
        onClick={() => {
          setAction(type);
          setIsOpen(true);
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
          {categories.map((category) => (
            <BotaoAtendimento
              key={category.videoId}
              texto={category.texto}
              category={category.category}
              videoId={category.videoId}
              onHover={setHoveredVideo}
              onClick={setIsOpen}
            />
          ))}
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

export default CustomDialog;
