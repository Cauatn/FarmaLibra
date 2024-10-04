import { useState } from "react";
import { BotaoAtendimento } from "./BotaoAtendimento";
import { categories } from "@/lib/categories";

function DialogCustomContent({ setClose }: { setClose: () => void }) {
  const [hoveredVideo, setHoveredVideo] = useState("");

  return (
    <>
      <div className="mx-auto max-w-md space-y-4 p-4">
        {categories.map((category) => (
          <BotaoAtendimento
            key={category.videoId}
            texto={category.texto}
            category={category.category}
            videoId={category.videoId}
            onHover={setHoveredVideo}
            setClose={setClose}
          />
        ))}
        <div className="rounded-md bg-gray-800 p-4 text-white">
          <p className="text-sm">
            AVISO: Não divulgar ou passar a terceiros qualquer informação
            contida neste sistema.
          </p>
        </div>
      </div>
      <div
        className="h-[400px] w-[1px] bg-gray-400"
        aria-id="dialog-description"
      ></div>
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
    </>
  );
}

export default DialogCustomContent;
