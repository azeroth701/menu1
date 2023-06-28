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
import { FoodCardList } from "../helpers/PlatosPrincipales";
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

      

     
      
      <FoodCard
        img={sw}
        title={"SWEET & SOUR CHICKEN "}
        description="Crujientes rebanadas de pechuga de pollo, combinadas con trocitos de piÃ±a, pimientos verdes, cebolla y salsa agridulce. (960 CAL) 17.5
Crispy chicken breast slices, combined with pineapple chunks, green peppers, onion, and sweet and sour sauce. (960 CAL) 17.5"
      />
      <FoodCard
        img={gi}
        title={"GINGER CHICKEN WITH BROCCOLI"}
        description="Rebanadas de pechuga de pollo salteadas en cebollines y jengibre, rodeadas de brÃ³coli. (530 CAL) 18
Chicken breast slices sautÃ©ed with chives and ginger; steamed broccoli. (530 CAL) 18"
      />
      <FoodCard
        img={pa}
        title={"KUNG PAO CHICKEN"}
        description="Pechuga de pollo ligeramente empanada, salteadas en chiles, manÃ­ y salsa kung pao. (1090 CAL) 18
Lightly breaded chicken breast sautÃ©ed with chili peppers, peanuts and kung pao sauce. (1090 CAL) 18"
      />
      <FoodCard
        img={or}
        title={"ORANGE CHICKEN"}
        description="Tiernas y crujientes rebanadas de pechuga de pollo preparadas en una salsa ligeramente picante de chile junto a cÃ¡scaras de naranja. (1000 CAL) 18.5
Tender and crispy chicken breast slices prepared in a slightly spicy chili sauce and orange peels (1000 CAL) 18.5"
      />

      <h1>CARNES*</h1>
      <p>
        Todos nuestros platos principales incluyen su opción de arroz blanco (6
        oz) [190 CAL] o integral (6 oz) [220 CAL]. All our entrees include your
        choice of white (6 oz) [190 CAL] or brown (6 oz) [220 CAL] rice.
      </p>
      <FoodCard
        img={be}
        title={"MONGOLIAN BEEF"}
        description="Rebanadas de carne de res caramelizadas y salteadas con cebollines y ajo. (800 CAL) 23
Sliced beef in sweet soy glaze, garlic, snipped green onion. (800 CAL) 23"
      />
      <FoodCard
        img={wk}
        title={"WOK-CHARRED BEEF"}
        description="Rebanadas de carne de res salteadas con setas, chiles, ajo y pimientos rojos y verdes. (890 CAL) 22
Sliced beef sautÃ©ed with mushrooms, chili peppers, garlic, and red and green bell peppers. (890 CAL) 22"
      />
      <FoodCard
        img={tr}
        title={"TRADITIONAL PEPPER STEAK"}
        description="Rebanadas de carne de res salteadas con cebollas, pimientos rojos y verdes. PruÃ©balo picante. (680 CAL) 22
Sliced beef sautÃ©ed with onions, green and red bell peppers. Try our spicy version. (680 CAL) 22"
      />
      <FoodCard
        img={br}
        title={"BEEF WITH BROCCOLI"}
        description="Rebanadas de carne de res salteadas con jengibre,cebollines y ajo. Mezcladas con brÃ³coli. (740 CAL) 22
Sliced beef sautÃ©ed with ginger, chives and garlic, steamed broccoli. (740 CAL) 22"
      />

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
