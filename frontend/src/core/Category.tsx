import { useState } from "react";
import Header from "@/components/Header";
import CustomDialog from "@/components/CustomDialog";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useActionStore } from "@/db/buffer";

function Category() {
  const { action, setAction } = useActionStore();

  return (
    <div className="h-full bg-[#F4F4F4]">
      <div className="mx-auto h-full max-w-7xl space-y-4">
        <Header />
        <main className="relative flex flex-col items-center space-y-8">
          <div className="z-20 flex h-20 w-[766px] items-center justify-center rounded-2xl bg-white font-bold">
            ATENDIMENTO
          </div>
          <div
            className={`inline-flex w-full ${action == "Cliente" ? `justify-start` : `justify-end`}`}
          >
            {action == "Cliente" ? (
              <CustomDialog type="Cliente" />
            ) : (
              <CustomDialog type="Farmaceutico" />
            )}
          </div>
          <ChatArea />
        </main>
      </div>
    </div>
  );
}

type CardProps = React.ComponentProps<typeof Card>;

function ChatArea({ className, ...props }: CardProps) {
  return (
    <div className="w-full p-4">
      <Card className={cn("w-[380px] p-4", className)} {...props}>
        <CardContent className="grid gap-4">
          <iframe
            src={`https://www.youtube.com/embed/xSlB7hv0pjg?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
          ></iframe>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Name of video</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Category;
