import rl from "../img/acompañantes/Tostones-.jpg";
import py from "../img/acompañantes/Fries-.jpg";
import gr from "../img/acompañantes/garlic-greenbeans-.jpg";
const Acompañantes = () => {
  return (
    <div className="text-white ">
      <h1 className="text-[44px]">Acompañantes</h1>
      <div className=" grid grid-cols-2 gap-2">
      <img className="" src={rl} alt="foot" />
      <h2 className="text-[22px]">
        GARLIC SPICED TOSTONES
        <p className="text-[14px]">
          Crujientes tostones con un toque de salsa de ajo. (3) (450 CAL) 5.5 •
          (5) (640 CAL) 8 Crispy fried plantains served with garlic sauce. (3)
          (450 CAL) 5.5 • (5) (640 CAL) 8
        </p>
      </h2>
      <img className="" src={py} alt="foot" />
      <h2 className="text-[22px]">
        CHANG’S CRISPY FRIES
        <p className="text-[14px]">
          Crujientes papas fritas con un toque de salsa de ajo. (700 CAL) 6
          Crispy French fries served with garlic sauce. (700 CAL) 6
        </p>
      </h2>
      <img className="" src={gr} alt="foot" />
      <h2 className="text-[22px]">
        CHILI-GARLIC GREEN BEANS
        <p className="text-[14px]">
          Habichuelas tiernas salteadas en una salsa de chile, jengibre y ajo.
          8.5 Green beans sautéed in a chili, ginger and garlic sauce. 8.5
        </p>
      </h2>
      </div>
    </div>
  );
};
export default Acompañantes;
