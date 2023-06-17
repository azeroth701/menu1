import FoodText from "./FoodText";

const Kidmenu = () => {
  return (
    <div className="text-white">
       <div id="kidmenu-section"></div>
      <h1 className="text-[44px]">kid's menu</h1>

      <FoodText
        title={"KID'S CHICKEN $7"}
        description="Crujientes trozos de pollo con su selección de Honey Sauce o Salsa Agridulce."
      />
      <FoodText
        title={"KID'S LO MEIN $7"}
        description="Egg noodles salteados con pollo."
      />
      <FoodText
        title={"KID'S CHICKEN FRIED RICE $7"}
        description="El favorito de los niños, pero sin todos los vegetales."
      />
      <FoodText
        title={"BABY BUDDHA'S FEAST $7"}
        description="Guisantes, zanahorias y brócoli servidos al vapor o sofreidos."
      />
      <h1>CREA TU PROPIO KID'S BENTO BOX</h1>
      <p>
        1) Escoge tu proteína: • Grilled Mongolian Glazed Chicken Skewers con
        brócoli y zahahoria. $9.5 • Chicken Sticks con un Vegetable Skewer.
        (Pimiento verde, piña y grape tomato) $10.5 • Shrimp Tempura con brócoli
        y zanahoria tempurizado. $9.5</p>
        <p>
          2) Escoge un acompañante: • Arroz Blanco, Arroz Integral, Arroz Frito,
          Lo Mein, Papas Fritas
        </p>
        <p>
          3) Todos los Kids Bento Box incluyen: • Porción de frutas, Spring Roll
          y Mayo-Ketchup
        </p>
      
    </div>
  );
};
export default Kidmenu;
