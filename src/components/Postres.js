import FoodCard from "./FoodCard";
import { FoodCardList } from "../helpers/PlatosPostres";
const Postres = () => {
  return (
    <div className="text-white">
      <div id="postres-section"></div>

      <h1 className="text-[44px] m-4">Postres</h1>

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
export default Postres;
