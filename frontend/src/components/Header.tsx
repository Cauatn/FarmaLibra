import { HelpCircle } from "lucide-react";
import { ArrowLeftIcon, CircleIcon, HomeIcon, Share2Icon } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Header({ showBack, route }: { showBack?: boolean; route?: string }) {
  const navigate = useNavigate();
  return (
    <header className="relative z-10 bg-black p-2 text-white">
      <div className="mx-auto max-w-7xl">
        <nav className="flex w-full items-center justify-between">
          {showBack && (
            <Button
              className="flex items-center space-x-1 text-sm"
              onClick={() => {
                if (route) navigate(route);
                else navigate(-1);
              }}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>VOLTAR</span>
            </Button>
          )}
          <div className="ml-40 flex w-full items-center justify-start space-x-20">
            <NavButton
              label="INÍCIO"
              icon={<HomeIcon className="h-4 w-4" />}
              route="/inicio"
            />
            <NavButton
              label="ATENDIMENTO"
              icon={<CircleIcon className="mr-1 inline h-4 w-4" />}
              route="/chat"
            />
            <NavButton
              label="ÁREA DE APRENDIZADO"
              icon={<Share2Icon className="h-4 w-4" />}
              route="#"
            />
            <NavButton
              label="SUGESTÕES"
              icon={<Share2Icon className="h-4 w-4" />}
              route="/sugestion"
            />
            <NavButton
              label="AJUDA"
              icon={<HelpCircle className="h-4 w-4" />}
              route="/ajuda"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

interface NavButtonProps {
  label: string;
  icon: React.ReactNode;
  route: string;
}

const NavButton: React.FC<NavButtonProps> = ({ label, icon, route }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <Button
      className={`flex items-center space-x-1 text-sm hover:bg-yellow-500 ${
        isActive ? "bg-yellow-400 text-black" : ""
      }`}
      onClick={() => navigate(route)}
    >
      {icon}
      <span>{label}</span>
    </Button>
  );
};

export default Header;
