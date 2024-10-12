import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import Sugestion from "@/core/Sugestion";
import emailjs from "@emailjs/browser";
import { ToastAction } from "./ui/toast";

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [video, setVideo] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  emailjs.init("uzzAdU4QhL0OaAq9L");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send("service_zpkdh6l", "template_qvll3fh", {
        name: name,
        message: suggestion,
        email: email,
      })
      .then(
        () => {
          toast({
            variant: "default",
            title: "Enviado com sucesso !",
            description: "sugestão enviada com sucesso",
          });

          setIsSubmitting(false);
          setName("");
          setEmail("");
          setSuggestion("");
          setVideo(null);
        },
        (error) => {
          toast({
            variant: "destructive",
            title: "Ops! Algo deu errado",
            description: `Ocorreu algum erro durante o envio.\n${error}`,
            action: (
              <ToastAction altText="Try again">Tente novamente</ToastAction>
            ),
          });
          setIsSubmitting(false);
        },
      );
  };

  return (
    <Card className="mx-auto my-0 w-full">
      <CardHeader>
        <CardTitle className="text-start">Envie sua Sugestão</CardTitle>
        <CardDescription className="text-justify">
          Preencha o formulário abaixo e nos ajude a melhorar sua experiência no
          uso do nosso aplicativo.
        </CardDescription>
      </CardHeader>
      <form onSubmit={sendEmail}>
        <CardContent className="space-y-4">
          <div className="space-y-2 text-start">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2 text-start">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2 text-start">
            <Label htmlFor="suggestion">Sua Sugestão</Label>
            <Textarea
              id="suggestion"
              placeholder="Compartilhe suas ideias conosco..."
              value={suggestion}
              onChange={(e) => setSuggestion(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex items-end space-x-4">
          <div className="space-y-2 text-start">
            <Label htmlFor="video">Enviar Vídeo</Label>
            <Input
              id="video"
              type="file"
              accept="video/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setVideo(file);
                }
              }}
            />
          </div>
          <Button
            type="submit"
            className="flex-grow bg-[#FFCD00] text-xl text-black"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar Sugestão"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
