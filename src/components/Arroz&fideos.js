import ng from "../img/arroz & fideos/fried-rice-.jpg";
import ei from "../img/arroz & fideos/lo-mein.jpg";
import th from "../img/arroz & fideos/pad-thai-.jpg";
import et from "../img/arroz & fideos/singapore-street-noodles-.jpg";

const Arrfid = () => {
  return (
    <div className="text-white">
      <h1 className="text-[44px]">
        arroz & fideos
        <p className="text-[16px]">
          Todos nuestros platos principales incluyen su opción de arroz blanco
          (6 oz) [190 CAL] o integral (6 oz) [220 CAL]. All our entrees include
          your choice of white (6 oz) [190 CAL] or brown (6 oz) [220 CAL] rice.
        </p>
      </h1>
      <di className=" grid grid-cols-2 gap-2">
        <img className="" src={ng} alt="foot" />
        <h1 className="text-[24px]">
          P.F. CHANG’S FRIED RICE
          <p className="text-[16px]">
            Arroz frito combinado con huevo, soya, zanahorias, brotes de soya y
            cebollines.Res (1700 CAL) 15 | Cerdo (1250 CAL) 15 | Pollo (1160
            CAL) 15 | Camarones (1100 CAL) 15 | Combinación (1250 CAL) 18
            Wok-tossed with eggs, soy, carrots, bean sprouts and chives. Beef
            (1700 CAL) 15 | Pork (1250 CAL) 15 | Chicken (1160 CAL) 15 | Shrimp
            (1100 CAL) 15 | Combination(1250 CAL) 18
          </p>
        </h1>
        <img className="" src={ei} alt="foot" />
        <h1 className="text-[24px]">
          LO MEIN
          <p className="text-[16px]">
            Fideos chinos combinados con vegetales y tu selección de res, cerdo,
            pollo o camarones. Res (870 CAL) 16 | Cerdo (920 CAL) 16 | Pollo
            (830 CAL) 16 | Camarones (760 CAL) 16 | Combinación (920 CAL) 18
            Chinese noodles combined with vegetables and your choice of beef,
            pork, or shrimp. Beef (870 CAL) 16 | Pork (920 CAL) 16 | Chicken
            (830 CAL) 16 | Shrimp (760 CAL) 16 | Combination (920 CAL) 1
          </p>
        </h1>
        <img className="" src={th} alt="foot" />
        <h1 className="text-[24px]">
          PAD THAI
          <p className="text-[16px]">
            Fideos de arroz, huevo, tofu, brotes de soya, maní machacado,
            zanahoria, cebollines, cilantro y lima. Pollo (1210 CAL) 16 |
            Camarones (1170 CAL) 16 | Combinación (1190 CAL) 18 Rice noodles,
            egg, tofu, bean sprouts, crushed peanuts, carrots, green onions,
            coriander and lime. Chicken (1210 CAL) 16 | Shrimp (1170 CAL) 16 |
            Combination (1190 CAL) 18
          </p>
        </h1>
        <img className="" src={et} alt="foot" />
        <h1 className="text-[24px]">
          SINGAPORE STREET NOODLES
          <p className="text-[16px]">
            Camarones, pollo, vegetales, tomates y fideos de arroz salteados en
            una salsa de curry. 16 Shrimp, chicken, vegetables, tomatoes, and
            rice noodles sautéed in a curry sauce. 16
          </p>
        </h1>
      </di>
    </div>
  );
};
export default Arrfid;
