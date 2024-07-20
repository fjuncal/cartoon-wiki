import { useRouter } from "next/router";

export default function detalhes() {
  const router = useRouter();
  const nome = router.query.nome;
  const descricao = router.query.descricao;
  const foto = router.query.foto;
  console.log(nome);
  console.log(descricao);
  console.log(foto);

  return <div className=" h-screen w-screen bg-gray-900 ">TESTE</div>;
}
