import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useActionStore } from "@/db/buffer";

interface AtendimentoProps {
  texto: string;
  videoId: string;
  category: string;
  onClick: (value: boolean) => void;
  onHover: (videoId: string) => void;
}

export function BotaoAtendimento({
  texto,
  videoId,
  category,
  onHover,
  onClick,
}: AtendimentoProps) {
  const navigate = useNavigate();
  const { setCategory } = useActionStore();

  return (
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
      onClick={() => {
        onClick(false);
        setCategory(category);
        navigate("/category");
      }}
      onMouseEnter={() => onHover(videoId)}
    >
      {texto}
    </Button>
  );
}
