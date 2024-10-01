import { Plane } from "lucide-react";
import { ArrowLeftIcon, CircleIcon, HomeIcon, Share2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Header({ showBack }: { showBack?: boolean }) {
  const navigate = useNavigate();
  return (
    <header className="relative z-10 bg-black p-2 text-white">
      <nav className="flex w-full items-center justify-between">
        {showBack && (
          <Button
            className="flex items-center space-x-1 text-sm"
            onClick={() => navigate(-1)}
          >
            <ArrowLeftIcon className="h-4 w-4" />
            <span>VOLTAR</span>
          </Button>
        )}
        <div className="ml-40 flex w-full items-center justify-start space-x-20">
          <Button
            className="flex items-center space-x-1 text-sm"
            onClick={() => navigate("/inicio")}
          >
            <HomeIcon className="h-4 w-4" />
            <span>INÍCIO</span>
          </Button>
          <Button
            className="rounded bg-yellow-400 px-2 py-1 text-sm font-bold text-black"
            onClick={() => navigate("/chat")}
          >
            <CircleIcon className="mr-1 inline h-4 w-4" />
            ATENDIMENTO
          </Button>
          <Button
            className="flex items-center space-x-1 text-sm"
            onClick={() => navigate("")}
          >
            <Plane className="h-4 w-4" />
            <span>NOTÍCIAS</span>
          </Button>
          <Button
            className="flex items-center space-x-1 text-sm"
            onClick={() => navigate("")}
          >
            <Share2Icon className="h-4 w-4" />
            <span>ÁREA DE APRENDIZADO</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
