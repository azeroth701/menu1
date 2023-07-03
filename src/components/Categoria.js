const Categoria = () => {
  return (
    <div className=" font-sans border-2 border-stone-600 bg-[#171513]  w-[27rem] h-[30rem] inline-block fixed ">
      <nav className="menu    ">
        <ul className="  ">
          <div className="text-white font-sans-serif  text-[18px] bg-[#a42b33] h-12   ">
          <h1 className="ml-6 font-serif leading-10  " >
            ESCOGE LA CATEGORIA
          </h1>
          </div>
          
          <li className=" underline ">
            <a href="#Menu-section" className="text-white  text-[18px]   ">
            MENÚ DE TEMPORADA
            </a>
          </li>
          <li className="">
            <a href="#bebidas-section" className="text-white text-[18px]  ">
            BEBIDAS
            </a>
          </li>
          
          <li className="">
            <a href="#aperitivos-section" className="text-white text-[18px] ">
              APERITIVOS
            </a>
          </li>
          <li className="">
            <a href="#sopasensala-section" className="text-white text-[18px]">
              SOPAS & ENSALADAS
            </a>
          </li>
          <li className="">
            <a href="#sushi-section" className="text-white text-[18px]">
              SUSHI
            </a>
          </li>
          <li className="">
            <a href="#platosprincipales-section" className="text-white text-[18px]">
              PLATOS PRINCIPALES
            </a>
          </li>
          <li className="">
            <a href="#arrozfideos-section" className="text-white text-[18px]">
              ARROZ & FIDEOS
            </a>
          </li>
          <li className="">
            <a href="#acompañantes-section" className="text-white text-[18px]">
              ACOMPAÑANTES
            </a>
          </li>
          <li className="">
            <a href="#postres-section" className="text-white text-[18px]">
              POSTRES
            </a>
          </li>
          <li className="">
            <a href="#kidmenu-section" className="text-white text-[18px]">
              KID'S MENU
            </a>
          </li>
          <li className="">
            <a href="#combinaciones-section" className="text-white text-[18px]">
              COMBINACIONES
            </a>
          </li>
          <li className="">
            <a href="#ofertas-section" className="text-white text-[18px]">
              OFERTAS PARA LLEVAR
            </a>
          </li>

          <p className=" text-[12.8px]  font-Arial text-white">
            <strong className="  font-Arial  text-[12.8px] text-withe">
              Retos con la cadena de suministro global:
            </strong>
            Debido a los retos que están enfrentando las industrias con la
            cadena de suministro global, es posible que algunos productos en
            nuestro menú no estén disponibles o se preparen de manera diferente.
            Pedimos disculpas por estos inconvenientes.
          </p>
        </ul>
      </nav>
    </div>
  );
};

export default Categoria;
