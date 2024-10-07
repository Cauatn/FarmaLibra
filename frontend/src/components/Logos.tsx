import CIM from "@/assets/cim.png";
import CFF from "@/assets/conselho-federal-de-farmacia.png";
import univasf from "@/assets/univasf.png";

const logos = [
  {
    name: "Univasf",
    url: univasf,
  },
  {
    name: "Convselho Federal De Farmacia",
    url: CFF,
  },
  {
    name: "cim",
    url: CIM,
  },
];

const StaticLogoCloud = () => {
  return (
    <div className="w-full py-9">
      <div className="flex w-full flex-col items-center justify-center px-4 md:px-8">
        <div className="mb-6 font-medium uppercase">Colaboração de</div>
        <div className="grid grid-cols-3 gap-x-20 md:grid-cols-3 lg:grid-cols-3">
          {logos.map((logo, key) => (
            <img
              key={key}
              src={logo.url}
              className="px- h-14"
              alt={`${logo.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StaticLogoCloud;
