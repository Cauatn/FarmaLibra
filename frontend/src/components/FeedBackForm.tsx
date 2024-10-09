import { useState } from "react";
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

export default function FeedbackForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [video, setVideo] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name,
      email,
      suggestion,
      video: video ? video : null,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/enviar-email/", {
        method: "POST",
        body: JSON.stringify(payload),
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Sugestão enviada!",
          description:
            "Obrigado por seu feedback. Sua sugestão foi recebida com sucesso.",
        });

        // Resetar o formulário
        setName("");
        setEmail("");
        setSuggestion("");
        setVideo(null);
      } else {
        toast({
          title: "Erro ao enviar sugestão",
          description:
            "Ocorreu um erro ao enviar sua sugestão. Tente novamente mais tarde.",
        });
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar sugestão",
        description:
          "Ocorreu um erro ao enviar sua sugestão. Tente novamente mais tarde.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
      <form onSubmit={handleSubmit}>
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
