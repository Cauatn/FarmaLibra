import FeedbackForm from "@/components/FeedBackForm";
import elipse from "@/assets/elipse_tela_de_inicio.png";
import cliente from "@/assets/imagem_cliente.png";
import Header from "@/components/Header";

function Sugestion() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-white">
      <img
        src={elipse}
        alt="Elipse"
        className="absolute -top-10 left-0 z-10 h-auto w-full"
      />
      <Header showBack />
      <div className="mt-14 flex h-full max-h-screen flex-1 items-center">
        <div className="relative flex w-2/3 flex-col space-y-8 px-8">
          <div className="relative inline-flex h-14 w-[380px] items-center justify-between bg-white">
            <div className="h-full w-2 bg-[#FFCD00]"></div>
            <img
              src={cliente}
              alt=""
              className="absolute -top-14 left-0 w-28"
            />
            <p className="ml-20 mr-9 text-2xl font-bold">
              Deixe suas sugestões
            </p>
          </div>
          <FeedbackForm />
        </div>

        <div className="w-1/3 bg-gray-100 p-8">
          <div className="mb-8 rounded-lg bg-white p-4">
            <h3 className="mb-2 font-semibold">
              VIDEO que muda ao passar o mouse em um texto, fazendo a tradução
              em libras
            </h3>
            <div className="h-40 rounded-lg bg-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sugestion;
