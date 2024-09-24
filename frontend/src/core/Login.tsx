import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FarmaLibra from "@/assets/farmalibras.png";

function Login() {
  return (
    <div className="inline-flex h-full w-full">
      <div className="flex w-[50%] flex-col justify-around px-4 py-20">
        <div className="flex flex-col">
          <h1 className="text-4xl">Acesse sua conta</h1>
          <span className="text-xl text-gray-600">Preencha seus dados</span>
        </div>
        <div className="space-y-4">
          <Input
            className="h-14 rounded-none border-none bg-gray-100 font-semibold"
            placeholder="CPF"
          />
          <Input
            className="h-14 rounded-none border-none bg-gray-100 font-semibold"
            placeholder="Senha"
          />
        </div>
        <div>
          <div className="flex flex-col items-start">
            <Button className="w-full rounded-sm bg-[#FFCD00] p-6 text-xl font-semibold text-black">
              Entrar
            </Button>

            <a href="#">Esqueci minha Senha</a>
          </div>
          <a href="#" className="text-xl font-semibold text-blue-500">
            Cadastre-se
          </a>
        </div>
      </div>
      <div className="flex w-[50%] flex-col items-center justify-center bg-[#FFCD00]">
        <div className="inline-flex w-20 space-x-2">
          <img src={FarmaLibra} alt="logo do FarmaLibra" />
          <div className="flex flex-col">
            <span className="text-xl font-bold">FARMALIBRAS</span>
            <span className="text-xl">Aplicativo Web</span>
          </div>
        </div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OscyJ0bt6jM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Login;
