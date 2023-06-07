import ken from "../img/combinaciones/changs-chicken.jpg";
import cri from "../img/combinaciones/crispy-honey-chicken.jpg";
import ses from "../img/combinaciones/-sesame-chicken.jpg";
import mon from "../img/combinaciones/mongolian-beef.jpg";
import rb from "../img/combinaciones/bbq-spare-ribs.jpg";
import nor from "../img/combinaciones/northern-spare-ribs.jpg";
import rc from "../img/combinaciones/-kung-pao-shrimp.jpg";
import gin from "../img/combinaciones/ginger-chicken.jpg";

const Combinacion = () => {
  return (
    <div className="text-white">
      <h1>
        combinaciones
        <p>
          Tus favoritos - Lunes a viernes todo el día. Todos los platos salen
          con un side de arroz: Blanco, integral o frito y un acompañante:
          tostones o papas fritas Your favorites: Monday thru Friday (all day).
          All dishes in our Combinaciones Menu come with a side of: White, brown
          or fried rice and your choice of fried plantains or french fries.
        </p>
      </h1>
      <div className=" grid grid-cols-2 gap-2">
        <img src={ken} alt="foot" />
        <h1>
          CHANG'S CHICKEN $13
          <p>
            Jugosas rebanadas de pechuga de pollo rebosadas en una salsa que
            combina especias y tonos agridulces. (960 CAL) Juicy slices of
            chicken breast, battered in a sauce that combines spices, and sweet
            and sour notes. (960 CAL)
          </p>
        </h1>
        <img src={cri} alt="foot" />
        <h1>
          CRISPY HONEY CHICKEN $13
          <p>
            Crujientes rebanadas de pechuga de pollo preparadas en una salsa
            dulce. (1420 CAL) Crispy chicken breast slices prepared in a sweet
            sauce. (1420 CAL)
          </p>
        </h1>

        <img src={ses} alt="foot" />
        <h1>
          SESAME CHICKEN $14.50
          <p>
            Rebanadas de pechuga de pollo, brócoli, pimientos rojos, y cebollas
            en una salsa de ajonjolí ligeramente picante. 930 CA Sliced chicken
            breasts, broccoli, red bell peppers, and onions in a slightly spicy
            sesame sauce. 930 CAL
          </p>
        </h1>
        <img src={mon} alt="foot" />
        <h1>
          MONGOLIAN BEEF $17
          <p>
            Rebanadas de carne de res caramelizadas y salteadas con cebollines y
            ajo. 800 CAL Sliced beef in sweet soy glaze, garlic, snipped green
            onion. 800 CAL
          </p>
        </h1>
        <img src={rb} alt="foot" />
        <h1>
          BBQ SPARE RIBS NUEVO $17.50
          <p>
            Costillas de cerdo preparadas al wok con un toque de salsa BBQ
            asiática. Pork spare ribs, prepared in a wok with a touch of Asian
            BBQ sauce.
          </p>
        </h1>
        <img src={nor} alt="foot" />
        <h1>
          NORTHERN STYLE SPARE RIBS (NUEVO) $17.50
          <p>
            Costillas de cerdo servidas con sal de cinco especias. Pork spare
            ribs served with dry rub five-spice seasoning.
          </p>
        </h1>

        <img src={rc} alt="foot" />
        <h1>
          KUNG PAO SHRIMP (NUEVO) $16
          <p>
            Camarones salteados con chiles, maní y nuestra salsa kung pao.
            Sautéed shrimp with chili, peanuts, and our kung pao sauce.
          </p>
        </h1>

        <img src={gin} alt="foot" />
        <h1>
          GINGER CHICKEN WITH BROCCOLI (NUEVO) $15.50 »
          <p>
            Rebanadas de pechuga de pollo salteadas en cebollines y jengibre,
            rodeadas de brócoli. Chicken breast slices sautéed with chives and
            ginger; steamed broccoli.
          </p>
          <p>
            *Ofertas válidas para consumir dentro del restaurante, para recoger
            a través de Online Ordering haciendo clic aquí o llamando al
            restaurante y a través de Delivery vía Uber Eats o Lunchera de lunes
            a Viernes de 12pm - 3pm *Combinaciones Menu Offer valid only to be
            consumed in-restaurant, via Online Ordering clicking here, orders
            made by phone or vía Delivery Apps Uber Eats or Lunchera from Monday
            - Friday from 12pm - 3pm.
          </p>
        </h1>
      </div>
    </div>
  );
};
export default Combinacion;
