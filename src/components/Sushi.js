import call from "../img/sushi/-california-roll.jpg";
import wa from "../img/sushi/warrior-roll.jpg";
import tu from "../img/sushi/spicy-tuna-roll.jpg";
import dr from "../img/sushi/spicy-dragon-roll.jpg";
import ph from "../img/sushi/philadelphia-roll.jpg";
import ya from "../img/sushi/yin-yang-roll.jpg";
import as from "../img/sushi/asian-rainbow-roll.jpg";
import ma from "../img/sushi/maduro-roll.jpg";

const Sushi = () => {
  return (
    <div>
    
      <h1 className="text-[44px] text-white ">SUSHI</h1>
      <div  className="text-white grid grid-cols-2 gap-2">
      <img className="" src={call} alt="foot" />
      <h1 className="text-[24px]">
        CALIFORNIA ROLL
        <p className="text-[14px]">
          Kanikama, pepino, aguacate, cebollines y acompañado con salsa de
          anguila. (380 CAL) 10.5 Kanikama, cucumber, avocado, chives, served
          with eel sauce. (380 CAL) 10.5
        </p>
      </h1>
      
<img className="" src={wa} alt="foot" />
      <h1 className="text-[24px]">
        WARRIOR ROLL
        <p className="text-[14px]">
          Rollo elaborado con kanikama tempurizado, queso crema y aguacate,
          acompañado de salsa de mangó, naranja y anguila, decorado con fritura
          de zanahoria. (300 CAL) 13 Roll made with tempura kanikama, cream
          cheese and avocado, accompanied by mango, orange and eel sauce,
          garnished with carrot fritters. (300 CAL) 13
        </p>
      </h1>

      <img className="" src={tu} alt="foot" />
      <h1 className="text-[24px]">
        SPICY TUNA ROLL
        <p className="text-[14px]">
          Atún ahí, pepino, cebollines, cubierto de ajonjolí y con un toque de
          salsa ligeramente picante. (300 CAL) 10.5 Ahi tuna, cucumber, covered
          in sesame seeds with a touch of mild spicy sauce. (300 CAL) 10.5
        </p>
      </h1>
      <img className="" src={dr} alt="foot" />
      <h1 className="text-[24px]">
        SPICY DRAGON ROLL
        <p className="text-[14px]">
          Crujiente rollo en tempura, relleno de kanikama y queso crema,
          coronado con atún ahí y una fina rodaja de fresno pepper. (570 CAL)
          14.5 Crunchy roll with tempura, filled with kanikama and cream cheese,
          topped with ahi tuna and a thin slice of fresno pepper. (570 CAL) 14.5
        </p>
      </h1>
      <img className="" src={ph} alt="foot" />
      <h1 className="text-[24px]">
        PHILADELPHIA ROLL
        <p className="text-[14px]">
          Salmón ahumado, queso crema y cebollines, envuelto en una hoja de
          nori. (270 CAL) 10.5 Smoked salmon, cream cheese and chives, wrapped
          in a nori leaf. (270 CAL) 10.5
        </p>
      </h1>
      <img className="" src={ya} alt="foot" />
      <h1 className="text-[24px]">
        YIN YANG ROLL
        <p className="text-[14px]">
          Camarón tempurizado, pepino, queso crema y zanahoria, con un toque de
          salsa de anguila ligeramente picante, salsa agridulce y semillas de
          ajonjolí. (510 CAL) 11 Shrimp tempura, cucumber, cream cheese and
          carrot, with a touch of slightly spicy eel sauce, sweet and sour sauce
          and sesame seeds. (510 CAL) 11
        </p>
      </h1>
      <img className="" src={as} alt="foot" />
      <h1 className="text-[24px]">
        ASIAN RAINBOW ROLL
        <p className="text-[14px]">
          Capas de salmón, atún, camarón y aguacate, rellenos de pepino,
          cebollines y kanikama. (330 CAL) 15 Layers of salmon, tuna, and
          avocado, filled with cucumber, chives and kanikama. (330 CAL) 15
        </p>
      </h1>
      <img className="" src={ma} alt="foot" />
      <h1 className="text-[24px]">MADURO ROLL 
        <p className="text-[14px]">¡Sushi a la criolla! Churrasco, queso crema, aguacate y amarillos. (460 CAL) 15
Puerto Rican sushi! Skirt steak, cream cheese, avocado and fried sweet plantains. (460 CAL) 15</p>
      </h1>
      </div>
     
    </div>
  );
};
export default Sushi