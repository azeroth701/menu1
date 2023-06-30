import ke from "../img/platos principales/changs-spicy-chicken.jpg";
import ho from "../img/platos principales/crispy-honey-chicken.jpg";
import se from "../img/platos principales/sesame-chicken.jpg";
import sw from "../img/platos principales/sweet-sour-chicken.jpg";
import gi from "../img/platos principales/ginger-chicken-broccoli.jpg";
import pa from "../img/platos principales/kung-pao-chicken.jpg";
import or from "../img/platos principales/orange-chicken.jpg";
import be from "../img/platos principales/mongolian-beef.jpg";
import wk from "../img/platos principales/blank-dark.jpg";
import tr from "../img/platos principales/Traditional-Pepper-Steak.jpg";
import br from "../img/platos principales/Beef-Broccoli.jpg";
import lo from "../img/platos principales/shrimp-lobster-sauce.jpg";
import cr from "../img/platos principales/crispy-honey-shrimp.jpg";
import mp from "../img/platos principales/kung-pao-shrimp.jpg";
import ml from "../img/platos principales/walnut-shrimp-melon.jpg";
import gl from "../img/platos principales/mizo-glazed-salmon.jpg";
import fe from "../img/platos principales/buddhas-feastjpg.jpg";
import po from "../img/platos principales/tofu-.jpg";
import ri from "../img/platos principales/veggie-fried-rice.jpg";
import { FoodCardList, FoodCardSteakList } from "../helpers/PlatosPrincipales";
import FoodCard from "./FoodCard";

const Principales = () => {
 
  return (
    <div className="text-white flex flex-col">
      <div id="platosprincipales-section"></div>
      <h1 className="text-[44px]">platos principales</h1>
      <p className="text-[22px]">AVES </p>

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

      
      <h1>CARNES*</h1>
      <p>
        Todos nuestros platos principales incluyen su opción de arroz blanco (6
        oz) [190 CAL] o integral (6 oz) [220 CAL]. All our entrees include your
        choice of white (6 oz) [190 CAL] or brown (6 oz) [220 CAL] rice.
      </p>
   
     

      <p>
        *Aviso: Nuestras carnes se preparan al momento. El consumo de carnes,
        pescados, mariscos o huevos que no estén totalmente cocidos puede
        incrementar su riesgo de contraer enfermedades alimentarias,
        especialmente si usted padece de ciertas condiciones médicas. *Consuming
        raw or undercooked meats, poultry, seafood, shellfish, or eggs may
        increase your risk of foodborne illness, especially if you have a
        certain medical conditions.
      </p>

      <h1>PESCADOS Y MARISCOS</h1>
      <p>
        Todos nuestros platos principales incluyen su opción de arroz blanco (6
        oz) [190 CAL] o integral (6 oz) [220 CAL]. All our entrees include your
        choice of white (6 oz) [190 CAL] or brown (6 oz) [220 CAL] rice.
      </p>

      {FoodCardSteakList.map((card) => (
        
        <FoodCard
          img={card.img}
          title={card.title}
          description={card.description}
        />
      ))}

      <FoodCard
        img={lo}
        title={"SHRIMP WITH LOBSTER SAUCE"}
        description="Camarones, habichuelas negras chinas, setas, cebollines y huevo mezclado en una salsa de combinaciÃ³n White Sauce y caldo de vegetales. (370 CAL) 18
Shrimp, Chinese black beans, peas, mushrooms, chives, and egg, mixed in White Sauce combination with vegetable broth. (370 CAL) 18"
      />
      <FoodCard
        img={cr}
        title={"CRISPY HONEY SHRIMP"}
        description="Camarones empanados preparados en una salsa dulce y servidos sobre fideos de arroz fritos. (1250 CAL) 21
Breaded shrimp prepared in a sweet sauce, served over fried rice noodles. (1250 CAL) 21"
      />
      <FoodCard
        img={mp}
        title={"KUNG PAO SHRIMP "}
        description="Camarones salteados con chiles, manÃ­ y nuestra salsa kung pao. (840 CAL) 21
SautÃ©ed shrimp with chili, peanuts and our kung pao sauce.(840 CAL) 21"
      />
      <FoodCard
        img={ml}
        title={"WALNUT SHRIMP WITH MELON"}
        description="Camarones empanados mezclados con una cremosa salsa con nueces caramelizadas y pedazos de melÃ³n honeydew. (1400 CAL) 22
Breaded shrimp mixed in a creamy sauce, caramelized nuts and sliced honeydew melon. (1400 CAL) 22"
      />
      <FoodCard
        img={gl}
        title={"MIZO GLAZED SALMON $24"}
        description="Filete de salmÃ³n glaseado con salsa mizo, servido sobre cama de repollo nappa, setas y espinacas en salsa mongolian. 24
Mizo-glazed salmon fillet served over a bed of napa cabbage, mushrooms and spinach in Mongolian Sauce. 24
"
      />

      <h1>VEGETARIANO</h1>
      <p>
        Todos nuestros platos principales incluyen su opción de arroz blanco (6
        oz) [190 CAL] o integral (6 oz) [220 CAL]. All our entrees include your
        choice of white (6 oz) [190 CAL] or brown (6 oz) [220 CAL] rice.
      </p>
      <FoodCard
        img={fe}
        title={"BUDDHAâ€™S FEAST "}
        description="Rollos rellenos de cheescake y fresas cubiertos en azÃºcar. 8"
      />

      <FoodCard
        img={po}
        title={"MA PO TOFU"}
        description="Tofu frito mezclado en una salsa vegetariana de ajo, cebollÃ­n y chile, rodeado de brÃ³coli al vapor. (940 CAL) 13
Fried tofu mixed in a vegetarian garlic, chives and chili sauce, steamed broccoli. (940 CAL) 13"
      />
      <FoodCard
        img={ri}
        title={"VEGETARIAN FRIED RICE "}
        description="Arroz frito en una salsa vegetariana, con brÃ³coli, zanahorias, brotes de soya, setas, cebollines y snow peas. (980 CAL) 14
Fried rice in a vegetarian sauce, with broccoli, carrots, bean sprouts, mushrooms, chives and snow peas. (980 CAL) 14"
      />
    </div>
  );
};
export default Principales;
