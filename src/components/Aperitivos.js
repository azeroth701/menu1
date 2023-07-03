import FoodCard from "./FoodCard";

import { FoodCardList, 
  FoodCardDimList } from "../helpers/PlatoAperitivo";
const Aperitivos = () => {
  return (
    <div className="text-white m-16">
      <div id="aperitivos-section"></div>

      <h1 className=" text-white text-[44px]  ">Aperitivos</h1>
      {FoodCardList.map((card) => (
        <FoodCard
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}

      <h1 className="text-[28px]">DIM SUM</h1>

      {FoodCardDimList.map((card) => (
        <FoodCard
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};
export default Aperitivos;
