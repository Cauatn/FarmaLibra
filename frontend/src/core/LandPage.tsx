import { Button } from "@/components/ui/button";
import Univasf from "@/assets/univasf.png";
import cim from "@/assets/cim.png";
import elipse from "@/assets/elipse_tela_de_inicio.png";
import cff from "@/assets/conselho-federal-de-farmacia.png";

function LandPage() {
  return (
    <div className="relative mx-auto max-w-7xl pt-20">
      <img
        src={elipse}
        alt="Elipse"
        className="absolute -top-5 left-0 -z-10 h-auto w-full"
      />
      <main className="flex h-full min-h-fit w-full items-start justify-between space-x-3">
        <div className="flex h-full flex-grow flex-col justify-between">
          <div className="flex min-h-[435px] flex-col space-y-8">
            <span className="whitespace-nowrap text-5xl font-semibold">
              BEM-VINDO AO FARMALIBRA
            </span>
            <p className="text-justify text-2xl">
              Idealizado por estudantes de graduação em Farmácia pela
              Universidade Federal do Vale do São Francisco como uma ferramenta
              que irá mediar a comunicação entre pessoas ouvintes e surdas no
              atendimento clínico farmacêutico com o objetivo de gerar
              igualdade, acessibilidade, e promover o uso racional de
              medicamentos.
            </p>
          </div>
          <div className="mt-auto flex justify-between space-x-4">
            <Button className="max-h-[75px] w-full max-w-[340px] bg-[#FFCD00] p-8 text-xl font-semibold text-black">
              Mais informações
            </Button>
            <Button className="max-h-[75px] w-full max-w-[340px] bg-[#FFCD00] p-8 text-xl font-semibold text-black">
              Iniciar
            </Button>
          </div>
        </div>

        <div className="h-[500px] w-[10px] bg-gray-400"></div>

        <div className="flex flex-col items-center">
          <iframe
            width="500"
            height="400"
            src="https://www.youtube.com/embed/OscyJ0bt6jM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            className="h-[400px] w-[600px]"
          ></iframe>
          <div className="mt-4 flex w-full justify-between">
            <img src={Univasf} alt="Univasf Logo" className="h-20 w-40" />
            <img src={cim} alt="CIM Logo" className="h-20 w-40" />
            <img src={cff} alt="CFF Logo" className="h-20 w-40" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandPage;
