import {
  FoodCardList,
  FoodCardSteakList,
  FoodCardVegeterianfoodList,
  FoodCardSeafoodList,
} from "../helpers/PlatosPrincipales";
import FoodCard from "./FoodCard";

const Principales = () => {
  return (
    <div className="text-white flex flex-col">
      <div id="platosprincipales-section"></div>
      <h1 className="text-[44px]">platos principales</h1>
      <p className="text-[24px]">AVES </p>

      <p className="text-[16px]">
        Todos nuestros platos principales incluyen su opciÃƒÂ³n de arroz blanco
        (6 oz) [190 CAL] o integral (6 oz) [220 CAL]. All our entrees include
        your choice of white (6 oz) [190 CAL] or brown (6 oz) [220 CAL] rice.
      </p>

      {FoodCardList.map((card) => (
        <FoodCard
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}

      <h1 className="text-[34px]">CARNES*</h1>
      <p className="text-[16px]">
        Todos nuestros platos principales incluyen su opción de arroz blanco (6
        oz) [190 CAL] o integral (6 oz) [220 CAL]. All our entrees include your
        choice of white (6 oz) [190 CAL] or brown (6 oz) [220 CAL] rice.
      </p>

      <p className="text-[16px]">
        *Aviso: Nuestras carnes se preparan al momento. El consumo de carnes,
        pescados, mariscos o huevos que no estén totalmente cocidos puede
        incrementar su riesgo de contraer enfermedades alimentarias,
        especialmente si usted padece de ciertas condiciones médicas. *Consuming
        raw or undercooked meats, poultry, seafood, shellfish, or eggs may
        increase your risk of foodborne illness, especially if you have a
        certain medical conditions.
      </p>

  

      {FoodCardSteakList.map((card) => (
        <FoodCard
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
         <h1 className="text-[24px]">PESCADOS Y MARISCOS</h1>
      <p className="text-[16px]">
        Todos nuestros platos principales incluyen su opción de arroz blanco (6
        oz) [190 CAL] o integral (6 oz) [220 CAL]. All our entrees include your
        choice of white (6 oz) [190 CAL] or brown (6 oz) [220 CAL] rice.
      </p>

      {FoodCardSeafoodList.map((card) => (
        <FoodCard
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}
        <h1 className="text-[24px]">VEGETARIANO</h1>
      <p className="text-[16px]">
        Todos nuestros platos principales incluyen su opción de arroz blanco (6
        oz) [190 CAL] o integral (6 oz) [220 CAL]. All our entrees include your
        choice of white (6 oz) [190 CAL] or brown (6 oz) [220 CAL] rice.
      </p>

      {FoodCardVegeterianfoodList.map((card) => (
        <FoodCard
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}

     

     
    </div>
  );
};
export default Principales;
