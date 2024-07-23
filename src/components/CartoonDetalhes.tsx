interface CartoonDetalhesProps {
  foto: string;
  nome: string;
  descricao: string;
}

export default function CartoonDetalhes(props: CartoonDetalhesProps) {
  return (
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-900 py-10">
      <div className="flex shadow-md">
        <div
          className="flex flex-wrap content-center justify-center rounded-l-md bg-gray-600 p-10"
          style={{ width: 720, height: 600 }}
        >
          <div className="w-72">
            <h1 className="text-4xl font-bold">{props.nome}</h1>
            <small className="text-gray-300 text-lg">{props.descricao}</small>
          </div>
        </div>

        <div
          className="flex flex-wrap content-center justify-center rounded-r-md"
          style={{ width: 680, height: 600 }}
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
