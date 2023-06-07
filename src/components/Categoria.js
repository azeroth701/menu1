const Categoria = () => {
  return (
    <div>
      <nav className="menu   w-72  ">
        <ul className="m-5 box-border h-120 w-72 p-4 border-2 bg-black ">
          <h1 className="text-white font-sans-serif text-center text-[24px] bg-red-600 w-64   ">
            ESCOGE LA CATEGORIA
          </h1>
          <li className="mt-3 underline ">
            <a href="#" className="text-white  text-[18px]   ">
              MENU DE TEMPORADA
            </a>
          </li>
          <li className="mt-3">
            <a href="#" className="text-white text-[18px]  ">
              BEBIDAS
            </a>
          </li>
          <li className="mt-3">
            <a href="#" className="text-white text-[18px] ">
              APERITIVOS
            </a>
          </li>
          <li className="mt-3">
            <a href="#" className="text-white text-[18px]">
              SOPAS & ENSALADAS
            </a>
          </li>
          <li className="mt-3">
            <a href="#" className="text-white text-[18px]">
              SUSHI
            </a>
          </li>
          <li className="mt-3">
            <a href="#" className="text-white text-[18px]">
              PLATOS PRINCIPALES
            </a>
          </li>
          <li className="mt-3">
            <a href="#" className="text-white text-[18px]">
              ARROZ & FIDEOS
            </a>
          </li>
          <li className="mt-3">
            <a href="#" className="text-white text-[18px]">
              ACOMPAÑANTES
            </a>
          </li>
          <li className="mt-3">
            <a href="#" className="text-white text-[18px]">
              POSTRES
            </a>
          </li>
          <li className="mt-3">
            <a href="#" className="text-white text-[18px]">
              KID'S MENU
            </a>
          </li>
          <li className="mt-3">
            <a href="#" className="text-white text-[18px]">
              COMBINACIONES
            </a>
          </li>
          <li className="mt-3">
            <a href="#" className="text-white text-18px]">
              OFERTAS PARA LLEVAR
            </a>
          </li>

          <p className="text-left text-[12.8px] leading-5 text-white">
            <strong className="text-left  text-[14.8px] text-withe">
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
