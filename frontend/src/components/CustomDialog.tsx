import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import cliente from "@/assets/imagem_cliente.png";
import farmaceutico from "@/assets/imagem_farmaceutico_tr.png";
import { useState } from "react";
import { useActionStore, useListVideos } from "@/db/buffer";

import DialogCustomContent from "./DialogCustomContent";

//#TODO : AJEITAR OS ICONES DE FARMACEUTICO
//E CLIENTE

function CustomDialog({ type }: { type: string }) {
  const { setAction } = useActionStore();

  const { items } = useListVideos();

  const [open, setOpen] = useState(false);

  const lastMessage =
    items
      .filter((item) => item.action.toLowerCase() === type.toLowerCase())
      .slice(-1)[0]?.message || "";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTitle className="hidden"></DialogTitle>
      <DialogTrigger
        asChild
        onClick={() => {
          setAction(type);
        }}
      >
        {type == "Cliente" ? (
          <div className="flex flex-col items-center">
            <div className="relative inline-flex h-14 w-[300px] items-center justify-between bg-white hover:cursor-pointer md:w-[280px]">
              <div className="h-full w-2 bg-[#FFCD00]"></div>
              <img
                src={cliente}
                alt=""
                className="absolute -top-14 left-4 w-28"
              />

              <p className="mr-9 text-xl font-bold">{type}</p>
            </div>
            <div className="mt-2 text-xl">{lastMessage}</div>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className="relative inline-flex h-14 w-[300px] items-center bg-white hover:cursor-pointer md:w-[280px]">
              <div className="h-full w-2 bg-[#FFCD00]"></div>
              <p className="ml-2 text-xl font-bold">Farmacêutico(A)</p>
              <img
                src={farmaceutico}
                alt=""
                className="absolute -top-14 right-0 w-28"
              />
            </div>
            <div className="mt-2 text-xl">{lastMessage}</div>
          </div>
        )}
      </DialogTrigger>
      <DialogContent
        className="flex max-w-fit space-x-4 p-14"
        aria-describedby="dialog-description"
      >
        <DialogCustomContent setClose={() => setOpen} />
      </DialogContent>
    </Dialog>
  );
}

export default CustomDialog;
