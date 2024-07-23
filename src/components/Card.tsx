import { IconeFogo, IconeRaio, IconeFoguete } from "../icons";
import { Cartoon } from "@/models/Cartoon";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const BASE_URL = "https://cartoon-wiki-api.onrender.com/cartoon/";
export default function Card() {
  const router = useRouter();

  const [cartoons, setCartoons] = useState<Cartoon[] | null>(null);
  async function obterCartoons() {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    const dataCartoons = Cartoon.fromJson(data);
    setCartoons(dataCartoons);
  }

  function detalhesCartoon(cartoon: Cartoon) {
    const { nome, descricao, foto } = cartoon;
    router.push({
      pathname: "/detalhes",
      query: {
        nome,
        descricao,
        foto,
      },
    });
  }

  useEffect(() => {
    obterCartoons();
  }, []);

  return (
    <div>
      {cartoons?.length! > 0 ? (
        <div className="mb-16">
          <div>
            <div className="container flex justify-center mx-auto pt-16">
              <div>
                <p className="text-gray-200 text-lg text-center font-normal pb-3">
                  Cartoon-Wiki
                </p>
                <h1 className="xl:text-3xl text-3xl text-center text-gray-200 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                  Dragon Ball Cartoon Wiki
                </h1>
              </div>
            </div>
            <div className="w-full px-10 pt-10 ">
              <div className=" mx-auto  ">
                <div
                  role="list"
                  aria-label="Behind the scenes People "
                  className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around  "
                >
                  {cartoons?.map((cartoon) => (
                    <div
                      key={cartoon?.id}
                      role="listitem"
                      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 px-2 "
                    >
                      <div
                        onClick={() => detalhesCartoon(cartoon)}
                        className="rounded-3xl overflow-hidden shadow-md bg-gray-200 hover:bg-gray-600 hover:shadow-black hover:cursor-pointer"
                      >
                        <div className="absolute -mt-20 w-full flex justify-center ">
                          <div className="h-32 w-34">
                            <img
                              src={cartoon.foto}
                              alt={cartoon.nome}
                              role="img"
                              className="rounded-full object-cover h-full w-full shadow-md "
                            />
                          </div>
                        </div>
                        <div className="px-6 mt-16 ">
                          <h1 className="font-bold text-3xl text-center mb-1 ">
                            {cartoon.nome}
                          </h1>
                          {/* <p className="text-gray-800 text-sm text-center">
                              Piccolo Daimao
                            </p> */}
                          <p className="text-center text-gray-600 text-base pt-3 font-normal ">
                            {/* Piccolo was created to avenge Piccolo Daimao. Losing to
                              Son Goku in the 23rd World Martial Arts Tournament,
                              Piccolo went off to train by himself. */}
                          </p>
                          <div className="w-full flex justify-center pt-5 pb-5">
                            <div
                              aria-label="Fogo"
                              role="img"
                              className="mx-5 w-8"
                            >
                              {IconeFogo}
                            </div>
                            <div
                              className="mx-5 w-8"
                              aria-label="Raio"
                              role="img"
                            >
                              {IconeRaio}
                            </div>
                            <div
                              className="mx-5 w-8"
                              aria-label="Foguete"
                              role="img"
                            >
                              {IconeFoguete}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* É essa div que vai ter que fazer o looping */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </div>
  );
}
