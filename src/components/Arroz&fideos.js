
import FoodCard from "./FoodCard";
import { FoodCardList } from "../helpers/PlatoArrozFideos";


const Arrfid = () => {
  return (
    <div className="text-white">
      <div id="arrozfideos-section"></div>

      <h1 className="text-[44px] font-serif">arroz & fideos</h1>
       
      <p className="text-[16px]">
        Todos nuestros platos principales incluyen su opción de arroz blanco (6
        oz) [190 CAL] o integral (6 oz) [220 CAL]. All our entrees include your
        choice of white (6 oz) [190 CAL] or brown (6 oz) [220 CAL] rice.
      </p>
      
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
export default Arrfid;
