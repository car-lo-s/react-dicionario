import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/header";
import { SectionInfo } from "./components/sectionInfo";
function App() {
  const [modo, setModo] = useState<boolean>(true);
  function modelo(a: boolean) {
    setModo(a);
  }
  return (
    <div>
      {modo ? (
        <div className="App">
          <Header modeloFN={modelo} />
          <SectionInfo />
        </div>
      ) : (
        <div className="App modoEscuroTexto">
          <Header modeloFN={modelo} />
          <SectionInfo />
        </div>
      )}
    </div>
  );
}

export default App;
