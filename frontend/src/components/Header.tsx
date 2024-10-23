import { useState } from "react";
import { HelpCircle } from "lucide-react";
import {
  ArrowLeftIcon,
  CircleIcon,
  HomeIcon,
  Share2Icon,
  Menu,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

function Header({ showBack, route }: { showBack?: boolean; route?: string }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10 bg-black p-2 text-white">
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between lg:justify-start">
          {showBack && (
            <Button
              className="flex w-fit items-center space-x-1 text-sm hover:bg-yellow-500"
              onClick={() => {
                if (route) navigate(route);
                else navigate(-1);
              }}
            >
              <ArrowLeftIcon className="h-4 w-4" />
              <span>VOLTAR</span>
            </Button>
          )}
          <div className="flex space-x-4 lg:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 text-white hover:bg-yellow-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:mx-20 lg:flex lg:w-full lg:items-center lg:justify-around lg:space-x-10">
            <NavButton
              label="INÍCIO"
              icon={<HomeIcon className="h-4 w-4" />}
              route="/inicio"
            />
            <NavButton
              label="ATENDIMENTO"
              icon={<CircleIcon className="inline h-4 w-4" />}
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
        {isMenuOpen && (
          <div className="fixed right-0 top-0 z-10 flex h-full w-[60%] flex-col space-y-2 bg-black p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="mb-4 self-end p-2 text-white hover:bg-yellow-500"
            >
              <X className="h-6 w-6" />
            </button>
            <NavLink
              label="INÍCIO"
              icon={<HomeIcon className="h-4 w-4" />}
              route="/inicio"
            />
            <NavLink
              label="ATENDIMENTO"
              icon={<CircleIcon className="mr-1 inline h-4 w-4" />}
              route="/chat"
            />
            <NavLink
              label="ÁREA DE APRENDIZADO"
              icon={<Share2Icon className="h-4 w-4" />}
              route="#"
            />
            <NavLink
              label="SUGESTÕES"
              icon={<Share2Icon className="h-4 w-4" />}
              route="/sugestion"
            />
            <NavLink
              label="AJUDA"
              icon={<HelpCircle className="h-4 w-4" />}
              route="/ajuda"
            />
          </div>
        )}
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

interface NavLinkProps {
  label: string;
  icon: React.ReactNode;
  route: string;
}

function NavLink({ label, icon, route }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === route;
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(route)}
      className={`flex items-center space-x-1 p-2 text-sm hover:bg-yellow-500 ${
        isActive ? "bg-yellow-400 text-black" : "text-white"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default Header;
