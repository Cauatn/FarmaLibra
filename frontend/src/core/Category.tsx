import { useMemo } from "react";
import Header from "@/components/Header";
import CustomDialog from "@/components/CustomDialog";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useActionStore, useListVideos } from "@/db/buffer";
import listaDeVideos from "@/db/videos";
import { useNavigate } from "react-router-dom";

function Category() {
  const { action, category } = useActionStore();

  // Memorizar o título e a cor com base na categoria
  const { titulo, cor } = useMemo(() => {
    let titulo;
    let cor;
    switch (category) {
      case "c1":
        titulo = "SAUDAÇÕES / ACOLHIMENTO";
        cor = "bg-[#95CC92]";
        break;
      case "c2":
        titulo = "PRESCRIÇÕES E DOCUMENTOS";
        cor = "bg-[#92AEE4]";
        break;
      case "c3":
        titulo = "PARA QUE SERVE ESSE MEDICAMENTO?";
        cor = "bg-[#F6B1EB]";
        break;
      case "c4":
        titulo = "COMO USAR O MEDICAMENTO";
        cor = "bg-[#FFAD54]";
        break;
      case "c5":
        titulo = "ALERTAS";
        cor = "bg-[#F26661]";
        break;
      case "c6":
        titulo = "OUTRA CATEGORIA";
        cor = "bg-[#C1C1C1]";
        break;
      default:
        titulo = "Título padrão";
        cor = "bg-gray-500";
    }
    return { titulo, cor };
  }, [category]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F4F4]">
      <div className="mx-auto w-full max-w-7xl flex-grow space-y-4">
        <Header />
        <main className="relative flex flex-grow flex-col items-center space-y-8">
          <div
            className={`z-20 flex h-20 w-[766px] items-center justify-center rounded-2xl ${cor} text-xl font-bold`}
          >
            {titulo}
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
  const { category, action } = useActionStore();
  const { addItem } = useListVideos();
  const navigate = useNavigate();

  // Filtra os vídeos para a categoria e Sender da mensagem
  const filteredVideos = listaDeVideos.filter(
    (video) => video.categoria === category && video.userType === action,
  );

  return (
    <div className="inline-flex w-full flex-wrap space-x-2">
      {filteredVideos.map((lista, index) => (
        <div key={index} className="w-fit p-4">
          <Card className={cn("w-[380px] p-4", className)} {...props}>
            <CardContent className="grid gap-4">
              <iframe
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${lista.videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${lista.videoId}`}
                title={`Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${
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
                }`}
                onClick={() => {
                  addItem({
                    action: action,
                    message: lista.texto,
                    videoId: lista.videoId,
                  });

                  navigate("/chat");
                }}
              >
                <p className="text-marquee">{lista.texto}</p>
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Category;
