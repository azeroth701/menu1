import rl from "../img/acompañantes/Tostones-.jpg";
import py from "../img/acompañantes/Fries-.jpg";
import gr from "../img/acompañantes/garlic-greenbeans-.jpg";
import FoodCard from "./FoodCard";
const Acompañantes = () => {
  return (
    <div className="text-white ">
      <h1 className="text-[44px]">Acompañantes</h1>
      
      <FoodCard img={rl}  title={"GARLIC SPICED TOSTONES"}
        description="Crujientes tostones con un toque de salsa de ajo. (3) (450
      CAL) 5.5 • (5) (640 CAL) 8 Crispy fried plantains served with garlic
      sauce. (3) (450 CAL) 5.5 • (5) (640 CAL) 8"/>
      
      <FoodCard
        img={py}
        title={"CHANG’S CRISPY FRIES"}
        description="Crujientes papas fritas con un toque de salsa de ajo. (700
      CAL) 6 Crispy French fries served with garlic sauce. (700 CAL) 6"
      />
      
      <FoodCard
        img={gr}
        title={"CHILI-GARLIC GREEN BEANS"}
        description="Habichuelas tiernas salteadas en una salsa de chile, jengibre
      y ajo. 8.5 Green beans sautéed in a chili, ginger and garlic sauce. 8.5"
      />
    </div>
  );
};
export default Acompañantes;
