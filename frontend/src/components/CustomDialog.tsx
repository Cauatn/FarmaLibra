import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import cliente from "@/assets/imagem_cliente.png";
import farmaceutico from "@/assets/imagem_farmaceutico_tr.png";
import { useState } from "react";
import { useActionStore } from "@/db/buffer";

import { categories } from "@/lib/categories";
import DialogCustomContent from "./DialogCustomContent";

function CustomDialog({ type }: { type: string }) {
  const { setAction } = useActionStore();

  const [open, setOpen] = useState(false);

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
