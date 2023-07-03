import FoodCard from "./FoodCard";
import { FoodCardList } from "../helpers/PlatoAcompañante";
const Acompañantes = () => {
  return (
    <div className="text-white ">
      <div id="acompañantes-section"></div>
      <h1 className="text-[44px]">Acompañantes</h1>

      {FoodCardList.map((card) => (
        <FoodCard
          img={card.img}
          title={card.title}
          description={card.description}
          text={card.text}
        />
      ))}
    </div>
  );
};
export default Acompañantes;
