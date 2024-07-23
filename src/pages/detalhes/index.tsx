import CartoonDetalhes from "@/components/CartoonDetalhes";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function detalhes() {
  // const [nome, setNome] = useState<string>();
  // const [descricao, setDescricao] = useState<string>();
  // const [foto, setFoto] = useState<string>();

  const router = useRouter();
  const nomeRouter = router.query.nome;
  const descricaoRouter = router.query.descricao;
  const fotoRouter = router.query.foto;

  // useEffect(() => {
  //   setNome(nomeRouter as string);
  //   setDescricao(descricaoRouter as string);
  //   setFoto(fotoRouter as string);
  // });
  // console.log(nome);
  // console.log(descricao);
  // console.log(foto);

  return (
    <div className=" h-screen w-screen bg-gray-900 ">
      <CartoonDetalhes
        nome={nomeRouter as string}
        descricao={descricaoRouter as string}
        foto={fotoRouter as string}
      />
    </div>
  );
}
