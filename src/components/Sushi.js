import FoodCard from "./FoodCard";
import { FoodCardList } from "../helpers/PlatoSushi";
const Sushi = () => {
  return (
    <div>
      <div id="sushi-section"></div>

      <h1 className="text-[44px] text-white ">SUSHI</h1>

      {FoodCardList.map((card) => (
        <FoodCard
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};
export default Sushi;
