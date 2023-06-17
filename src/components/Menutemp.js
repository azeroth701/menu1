//l-14 la  correcta seguir ese ejemplo
//sacar los p de las h por underline
import gek from "../img/menu de temporada/Dynamite.jpg";
import em from "../img/menu de temporada/EmperorsStrawberry.jpg";
import ga from "../img/menu de temporada/GarlicNoodles.jpg";
import ko from "../img/menu de temporada/KoreanBulgogi.jpg";
import FoodCard from "./FoodCard";
import FoodText from "./FoodText";

<div id="menutemp-section"></div>
const Temporada = () => {
  return (
    <div className="ml-10 mt-10   ">
      <h1 className="text-white text-[44px]  ml-3  ">menu de temporada</h1>
      <FoodCard
        img={gek}
        title={"DYNAMITE ROLL"}
        description="Rollo elaborado con kanikama, pepino, aguacate, cebollines, coronado
            de camarones tempurizados y bañados en salsa dinamita, terminados
            con salsa de anguila y sriracha. 12"
      ></FoodCard>
      <FoodCard
        img={ko}
        title={"KOREAN BULGOGI STEAK"}
        description="New York Strip con un sabroso glaseado bulgogi, papas crujientes y
          cebolla picada. 39"
      />
      <FoodCard
        img={ga}
        title={"GARLIC NOODLES"}
        description="Fideos chinos mezclados con ajo, cebollines, chili pepper flakes y salsa con tonos agridulces. Servidos con pepino fresco rebanado y coronados con cilantro. 11"
      />
      <FoodCard
        img={em}
        title={"EMPEROR'S STRAWBERRY ROLL"}
        description="Rollos rellenos de cheescake y fresas cubiertos en azúcar. 8"
      />
      
      <FoodText 
        title={"ESPRESSO MARTINI"}
        description="Ron Alto Grande, Kahlúa y café espresso. 9"
      />
      
    </div>
  );
};
export default Temporada;
