import { IconeFogo, IconeRaio, IconeFoguete } from "../icons";

interface CartoonDetalhesProps {
  foto: string;
  nome: string;
  descricao: string;
}

export default function CartoonDetalhes(props: CartoonDetalhesProps) {
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-900 py-10 ">
      <div className="flex shadow-md rounded-3xl overflow-hidden bg-gray-900 shadow-black">
        <div
          className="flex flex-wrap content-center justify-center rounded-l-md bg-gray-600 p-10"
          style={{ width: 720, height: 600 }}
        >
          <div className="w-72">
            <h1 className="text-4xl font-bold text-center mb-8">
              {props.nome}
            </h1>
            <small className="text-gray-300 text-lg">{props.descricao}</small>
            <div className="w-full flex justify-center pt-5 pb-5">
              <div aria-label="Fogo" role="img" className="mx-5 w-8">
                {IconeFogo}
              </div>
              <div aria-label="Raio" role="img" className="mx-5 w-8">
                {IconeRaio}
              </div>
              <div aria-label="Foguete" role="img" className="mx-5 w-8">
                {IconeFoguete}
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-wrap content-center justify-center rounded-r-md"
          style={{ width: 620, height: 600 }}
        >
          <img
            className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
            src={props.foto}
          />
        </div>
      </div>
    </div>
  );
}
