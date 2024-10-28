import { Button } from "@/components/ui/button";
import { Book, Globe, Instagram, Layers, ShieldCloseIcon } from "lucide-react";
import { useState } from "react";
import StaticLogoCloud from "@/components/Logos";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/farmalibras.png";
import ImageSection from "@/components/SectionCard";
import Confetti from "react-confetti";

const navigation = {
  connect: [
    {
      name: "Instagram",
      href: "https://instagram.com/cauatn",
    },
    {
      name: "Github",
      href: "https://www.github.com/cauatn/Farmalibras",
    },
  ],
  company: [
    { name: "Conselho Federal de Libras", href: "/" },
    { name: "Univasf", href: "/" },
    { name: "Cim", href: "/" },
  ],
};

function LandPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <main className="container mx-auto flex min-h-screen flex-grow flex-col justify-between">
        <Header />
        <div className="flex flex-grow items-center justify-between">
          <div className="mx-5 mt-14 flex flex-grow flex-col justify-between lg:mx-5 lg:flex-row">
            <div className="mb-10 h-full pr-8 lg:w-[40%]">
              <h1 className="mb-4 text-start text-6xl font-semibold">
                Bem Vindo ao Farmalibras
              </h1>
              <p className="text-md mb-8 text-start text-gray-600">
                O programa tem como objetivo estimular o aprendizado de Língua
                Brasileira de Sinais (Libras) pelos farmacêuticos brasileiros e
                desenvolver ferramentas de comunicação com as pessoas surdas
                usuárias de Libras. Esse Aplicativo traz acesso a todas os
                instrumentos e publicações do Programa FarmaLibras. Assim, você
                pode acessar a Ferramenta de Atendimento Farmacêutico, o
                Vocabulário Terminográfico Farmacêutico Bilíngue
                (Português-Libras), o Curso de Libras para Farmacêuticos,
                ofertado pela Plataforma Edu.farma do CFF, e as demais
                publicações do FarmaLibras.
              </p>
              <div className="inline-flex w-full justify-between space-x-4">
                <Button className="h-11 rounded-md bg-yellow-400 px-8 py-5 text-white hover:bg-gray-800">
                  Aprender Mais
                </Button>
                <Button
                  className="h-11 rounded-md border-black bg-white px-8 py-5 text-black hover:bg-yellow-400"
                  variant="outline"
                  onClick={() => navigate("/inicio")}
                >
                  Comece já
                </Button>
              </div>
            </div>
            <iframe
              width="500"
              height="400"
              src="https://www.youtube.com/embed/OscyJ0bt6jM?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=OscyJ0bt6jM"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
              allowFullScreen
              className="w-full lg:w-[50%]"
            ></iframe>
          </div>
        </div>
        <StaticLogoCloud />
        <section>
          <AboutPage />
        </section>
        <Footer />
      </main>
    </div>
  );
}

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [confettiVisible, setConfettiVisible] = useState(false);

  const handleConfetti = () => {
    setConfettiVisible(true);
    setTimeout(() => setConfettiVisible(false), 4000);
  };

  return (
    <>
      <div
        className={`absolute left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex w-full items-center gap-x-6 bg-yellow-400 px-6 py-3 sm:px-3.5 sm:before:flex-1">
          <div className="flex items-center text-sm font-medium leading-6 text-white">
            <p>
              O Farmalibras está em desenvolvimento. Algumas funções podem
              mudar. Agradecemos sua paciência!{" "}
            </p>

            <button
              className="ml-3 flex-none rounded-lg bg-gray-900 px-4 py-2 text-xs text-white shadow-sm hover:bg-gray-900/80"
              onClick={handleConfetti}
            >
              Tudo bem !
            </button>
            {confettiVisible && (
              <Confetti width={window.innerWidth} height={window.innerHeight} />
            )}
          </div>
          <div className="flex flex-1 justify-end">
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              aria-label="Dismiss"
            >
              <ShieldCloseIcon className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
      {isVisible && <div className="h-[52px]" />}
    </>
  );
}
function Footer() {
  return (
    <footer
      aria-labelledby="footer-heading"
      className="font-inter w-full px-4 py-8"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 lg:flex-row">
          <div className="flex flex-col justify-start space-y-8">
            <div className="inline-flex items-center gap-4">
              <img
                width={100}
                height={40}
                src={Logo}
                alt="logo"
                className="h-7 w-auto"
              />
              <span className="text-xl font-normal">Farmalibras</span>
            </div>
            <p className="text-md max-w-xs text-start leading-6 text-gray-700 dark:text-gray-300">
              "A verdadeira inovação se encontra na acessibilidade, onde cada
              conexão tem o poder de transformar vidas e promover a inclusão."
            </p>
            <div className="flex space-x-6 text-sm text-gray-700 dark:text-gray-300">
              <div>Feito com ❤️ por nossa equipe.</div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-14 md:grid-cols-2 lg:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                Fale com a gente
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-200">
                Instituições
              </h3>
              <div className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-8">
          <p className="text-xs leading-5 text-gray-700">
            &copy; 2024 Farmalibras. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

const AboutPage = () => {
  return (
    <div className="mx-auto my-8 max-w-4xl px-4">
      <ImageSection />
      <div className="mb-8">
        <a
          href="https://www.instagram.com/farmalibras/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-lg bg-gray-100 px-4 py-2 text-black hover:bg-gray-200"
        >
          <Instagram className="mr-2 h-5 w-5" />
          FarmaLibras no Instagram
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <FeatureCard
          icon={<Book className="h-8 w-8 text-yellow-500" />}
          title="Aprendizado Acessível"
          description="Oferecemos um curso de Libras especializado para farmacêuticos, tornando o atendimento mais inclusivo."
        />
        <FeatureCard
          icon={<Globe className="h-8 w-8 text-yellow-500" />}
          title="Aplicativo Web"
          description="Nossa plataforma online facilita o acesso ao conteúdo e permite aprender de qualquer lugar."
        />
        <FeatureCard
          icon={<Layers className="h-8 w-8 text-yellow-500" />}
          title="Vocabulário Específico"
          description="Desenvolvemos um vocabulário farmacêutico em Libras para melhorar a precisão na comunicação."
        />
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="rounded-lg bg-gray-100 p-6">
      <div className="mb-4">{icon}</div>
      <h3 className="mb-2 text-xl font-semibold text-black">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default LandPage;
