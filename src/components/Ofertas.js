const Ofertas = () => {
  return (
    <div className="text-white">
      <div id="ofertas-section"></div>
      <h1 className="text-[44px]">ofertas para llevar</h1>
      <h2 className="text-[22px]">
        aperitivos
        <p className="text-[16px] m-2">
          Solo disponible en porción para 6 personas.
        </p>
        <p className="text-[16px] grid grid-cols-2 gap-2">
          <p>Chicken Lettuce Wraps</p>
          <p>$60</p>
          <p>Dumplings de Cerdo</p>
          <p>$45</p>
          <p>Dumplings de Camarones</p>
          <p>$50</p>
          <p>Crab Wontons</p>
          <p>$40</p>
          <p>Eggrolls</p>
          <p>$35</p>
        </p>
      </h2>

      <h2 className="text-[22px] ">
        SOPA | ENSALADA
        <p className="text-[16px] flex flex-row">
          <p>
            Asian Caesar Salad
            <p>
              4 personas <p>$20</p>
              <p>$12</p>
            </p>
          </p>

          <p>
            Wonton Soup <p> 6 personas</p>
            <p>$32</p>
          </p>
        </p>
      </h2>

      <h2 className="text-[22px]">
        PLATOS PRINCIPALES
        <p className="text-[22px]">Salen con arroz blanco o integral</p>
        <p className="text-[16px]">
          4 personas 6 personas Buddha's Feast $30 $48 Chang's Chicken $45 $65
          Honey Chicken $45 $65 Honey Shrimp $50 $70 Mongolian Beef $65 $87
        </p>
      </h2>

      <h2 className="text-[22px]">
        ARROZ | FIDEOS
        <p className="text-[16px]">
          4 personas 6 personas Fried Rice Combo $20 Lo Mein Combo $50
        </p>
      </h2>

      <h2 className="text-[22px]">
        POSTRES
        <p className="text-[16px]">
          4 personas 6 personas Guava Cheese Wontons $25
        </p>
        <p className="text-[16px]">
          Opción de bandejas solo disponibles para llevar.
        </p>
      </h2>
    </div>
  );
};
export default Ofertas;
