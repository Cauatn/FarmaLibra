import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { ArrowLeftIcon, CircleIcon, HomeIcon, Share2Icon } from "lucide-react";

function Header() {
  return (
    <header className="bg-black p-2 text-white">
      <nav className="flex items-center">
        <div className="flex w-fit items-center space-x-4">
          <a href="#" className="flex items-center space-x-1 text-sm">
            <ArrowLeftIcon className="h-4 w-4" />
            <span>VOLTAR</span>
          </a>
          <a href="#" className="flex items-center space-x-1 text-sm">
            <HomeIcon className="h-4 w-4" />
            <span>INÍCIO</span>
          </a>
        </div>
        <div className="flex w-full items-center justify-center space-x-4">
          <a
            href="#"
            className="rounded bg-yellow-400 px-2 py-1 text-sm font-bold text-black"
          >
            <CircleIcon className="mr-1 inline h-4 w-4" />
            ATENDIMENTO
          </a>
          <a href="#" className="flex items-center space-x-1 text-sm">
            <PaperPlaneIcon className="h-4 w-4" />
            <span>NOTÍCIAS</span>
          </a>
          <a href="#" className="flex items-center space-x-1 text-sm">
            <Share2Icon className="h-4 w-4" />
            <span>ÁREA DE APRENDIZADO</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
