
import FoodCard from "./FoodCard";
import { FoodCardList } from "../helpers/PlatoSopSala";
const Sopas = () => {
  return (
    <div className=" text-white">
         <div id="sopasensala-section"></div>
      <h1 className="text-[44px]">sopas & ensaladas</h1>
      
     

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
export default Sopas;