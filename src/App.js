import logo from "./logo.svg";
import "./App.css";
import Categoria from "./components/Categoria";
import Menutemp from "./components/Menutemp";
import Bebidas from "./components/Bebidas";
import Aperitivos from "./components/Aperitivos";
import Sopas from "./components/Sopas&ensaladas";
import Sushi from "./components/Sushi";
import Principales from "./components/Principales";
import Arrfid from "./components/Arroz&fideos";
import Acompañantes from "./components/Acompañantes";
import Postres from "./components/Postres";
import Kidmenu from "./components/Kidmenu";
import Combinacion from "./components/Combinaciones";
import Ofertas from "./components/Ofertas";
import log from "../src/img/pfchangs.png";

function App() {
  return (
    <div className="min-w-[100vh] min-h-[100vh] bg-gray-950 p-4 sm:p-8">
      <div className="">
        <img className="m-4 h-[2rem]  " src={log} alt="img"></img>
      </div>
      <h1 className="text-white  text-[44px] justify-center  bg-[#a42b33] p-4  font-['trajan-pro-bold']">
      Menú T
      </h1>
      <div className="m-6  ">
        <Categoria></Categoria>
         <Menutemp></Menutemp>
      </div>

      <div className=" ">
       
        <Bebidas></Bebidas>

        <Acompañantes></Acompañantes>
        <Arrfid></Arrfid>
        <Principales></Principales>
        <Sushi></Sushi>
        <Sopas></Sopas>
        <Aperitivos></Aperitivos>
        <Postres></Postres>
        <Kidmenu></Kidmenu>
        <Combinacion></Combinacion>
        <Ofertas></Ofertas>
      </div>
    </div>
  );
}

export default App;
