import { Button } from "@/components/ui/button";
import { ShieldCloseIcon } from "lucide-react";
import { useState } from "react";
import StaticLogoCloud from "@/components/Logos";
import { useNavigate } from "react-router-dom";

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
          <div className="mt-14 flex flex-grow justify-between">
            <div className="h-full w-[40%] pr-8">
              <h1 className="mb-4 text-start text-6xl font-semibold">
                Bem Vindo ao Farmalibra
              </h1>
              <p className="mb-8 text-start text-xl text-gray-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                popularised i
              </p>
              <div className="inline-flex w-full justify-between space-x-4">
                <Button className="h-11 rounded-md bg-gray-900 px-8 py-5 text-white hover:bg-gray-800">
                  Aprender Mais
                </Button>
                <Button
                  className="h-11 rounded-md bg-red-500 px-8 py-5 text-white hover:bg-red-600"
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
              className="w-[50%]"
            ></iframe>
          </div>
        </div>
        <StaticLogoCloud />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <div
        // replace `absolute` with `fixed` if you want the banner to be fixed on the page Also Animation will not work if you use `absolute`
        className={`absolute left-0 right-0 top-0 z-50 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex w-full items-center gap-x-6 bg-yellow-400 px-6 py-3 sm:px-3.5 sm:before:flex-1">
          <div className="flex items-center text-sm font-medium leading-6 text-white">
            <p>Lorem Ipsum is simply dummy text of the printing.</p>

            <a className="ml-3 flex-none rounded-lg bg-gray-900 px-4 py-2 text-xs text-white shadow-sm hover:bg-gray-900/80">
              Lorem Ipsum
            </a>
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
      className="font-inter m-auto w-full max-w-7xl align-bottom"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-2">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-8">
            <img
              width={100}
              height={40}
              src="/images/placeholder.svg"
              alt="logo"
              className="h-7 w-auto"
            />
            <p className="text-md max-w-xs leading-6 text-gray-700 dark:text-gray-300">
              Not your average component library - build faster, launch sooner.
            </p>
            <div className="flex space-x-6 text-sm text-gray-700 dark:text-gray-300">
              <div>Feito com ❤️ por INSERIR.</div>
            </div>
          </div>
          {/* items */}
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
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
        </div>
        <div className="mt-8 border-t border-gray-900/10 pt-8 dark:border-gray-100/10 sm:mt-20 lg:mt-6 lg:pb-2">
          <p className="text-xs leading-5 text-gray-700 dark:text-gray-300">
            &copy; 2024 Farmalibras. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default LandPage;
