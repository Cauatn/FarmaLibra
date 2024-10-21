import { motion } from "framer-motion";
import { BookOpenText, MessageCircleMore, Syringe } from "lucide-react";
import { useState } from "react";

const ImageSection = () => {
  const [activeImage, setActiveImage] = useState(1);

  const ImageTabs = [
    {
      name: "História do FarmaLibras",
      description: "Conheça a origem e evolução do FarmaLibras.",
      icon: <BookOpenText />,
    },
    {
      name: "O vocabulário",
      description: "Explore as funcionalidades da nossa plataforma online.",
      icon: <MessageCircleMore />,
    },
    {
      name: "O curso de Libras para o farmacêutico",
      description: "Aprenda Libras voltada para a área farmacêutica.",
      icon: <Syringe />,
    },
  ];

  const handleImageChange = (index: number) => {
    setActiveImage(index);
  };

  return (
    <div className="bg-white pt-8">
      <div className="mx-auto max-w-2xl space-y-4 sm:text-center">
        <p className="mt-2 text-3xl font-semibold tracking-tight text-gray-800 sm:text-4xl">
          Sobre o Farmalibras
        </p>
        <p className="text-md text-gray-600">
          O FarmaLibras é uma iniciativa inovadora que visa facilitar a
          comunicação entre farmacêuticos e pacientes surdos através da Língua
          Brasileira de Sinais (Libras).
        </p>
      </div>
      <div className="image-navigation mt-8 flex w-full items-center justify-center text-center">
        <div className="mb-10 flex w-full max-w-6xl flex-col gap-2 md:flex-row">
          {ImageTabs.map((tab, index) => (
            <button
              key={index}
              className={`group relative flex w-full flex-col items-start p-3 text-left`}
              onClick={() => handleImageChange(index + 1)}
            >
              <div
                className={`mb-3 ${
                  activeImage === index + 1
                    ? `bg-yellow-500 text-red-100`
                    : `bg-yellow-100 text-yellow-500`
                } z-10 rounded-lg p-1 group-hover:bg-yellow-500 group-hover:text-red-100`}
              >
                {tab.icon}
              </div>
              <div className="z-10 mb-2 text-xs font-semibold">{tab.name}</div>
              <p className="z-10 m-0 text-xs text-gray-600 md:text-sm">
                {tab.description}
              </p>
              {activeImage === index + 1 && (
                <motion.span
                  layoutId="tab"
                  transition={{ type: "spring", duration: 0.3 }}
                  className="absolute inset-0 z-0 rounded-md bg-yellow-100"
                ></motion.span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
