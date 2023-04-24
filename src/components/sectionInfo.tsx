import search from "../assets/search.svg";
import "../App.css";
import { useEffect, useState } from "react";
import { dado, sinonimo } from "./dado";

type info = {
  etymology: string;
  meanings: string;
  partOfSpeech: string;
};

export const SectionInfo = () => {
  const [palavra, setPalavra] = useState("");
  const [aux, setAux] = useState("");
  const [pesquisa, setPesquisa] = useState(false);
  const [dados, setDados] = useState<info | null>(null);
  const [semelhante, setSemelhante] = useState<string[] | null>(null);
  const [load, setLoad] = useState<boolean>(false);

  const handleClick = () => {
    setLoad(true);
    setPesquisa(true);
    setAux(palavra);

    try {
      const informacao: Promise<info[]> = dado(palavra);
      informacao.then((info) => {
        setDados(info[0]);
        console.log(info);
      });
      const sinonimos: Promise<string[]> = sinonimo(palavra);
      sinonimos.then((info) => {
        setSemelhante(info);
      });
      setLoad(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePress=(e:any)=>{
    if(e.key=== "Enter"){
      handleClick()
    }
  }
  
  return (
    <section className="sectionInfo">
      <div className="sectionInput">
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setPalavra(e.target.value)}
          value={palavra}
          onKeyDown={handlePress}
        />
        <button onClick={handleClick}>
          <img src={search} alt="" />
        </button>
      </div>
      <hr />

      {load ? (
        <p>Carregando...</p>
      ) : (
        <div className="sectionDesc">
          <h1>{pesquisa ? aux : " -- "}</h1>
          <h2>{dados?.etymology || "--"}</h2>
          <ul>
            {dados ? (
              dados.meanings.map((item: string) => <li>{item}</li>)
            ) : (
              <p>{"--"}</p>
            )}
          </ul>
          <h3>Sinônimos</h3>
          <div>
            {/* <h3>Sinônimos</h3> */}
            {semelhante ? (
              semelhante.map((item: string) => <p>{"| " + item}</p>)
            ) : (
              <p>{"--"}</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
