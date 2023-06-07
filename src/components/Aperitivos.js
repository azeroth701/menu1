import cha from "../img/aperitivos/lettuce-wraps-.jpg";
import ch from "../img/aperitivos/vegetarian-lettuce-wraps.jpg";
import dy from "../img/aperitivos/Dynamite-Shrimp.jpg";
import ed from "../img/aperitivos/edamame-.jpg";
import ca from "../img/aperitivos/-blank-dark.jpg";
import bbq from "../img/aperitivos/changs-spare-ribs-.jpg";
import st from "../img/aperitivos/northern-style-spare-ribs.jpg";
import be from "../img/aperitivos/crispy-green-beans-.jpg";
import egg from "../img/aperitivos/egg-rolls-.jpg";
import ha from "../img/aperitivos/handmade-dumplings.jpg";
import sp from "../img/aperitivos/spring-rolls-.jpg";
import crab from "../img/aperitivos/Crab-Wonton.jpg";

const Aperitivos = () => {
  return (
    <div className="text-white m-16">
      <h1 className=" text-white text-[44px]  ">aperitivos</h1>
      <div className= " grid grid-cols-2 gap-2">
        <div >
          <img className="" src={cha} alt="foot" />
          <h1 className="text-[24px]">
            CHANG’S CHICKEN LETTUCE WRAPS
            <p className="text-[16px]">
              Una combinación de pollo, setas, cebollines y water chestnuts
              preparados en wok, acompañada de frescas hojas de lechuga para que
              hagas tus wraps. (530 CAL) 13
            </p>
            <p className="text-[16px]">
              A combination of chicken, mushrooms, chives and water chestnuts.
              Accompanied by fresh lettuce leaves for you to make your wraps
              (530 CAL) 13
            </p>
          </h1>

          <img className="" src={ch} alt="foot" />
          <h1 className="text-[24px]">
            CHANG’S VEGETARIAN LETTUCE WRAPS
            <p className="text-[16px]">
              La versión vegetariana de nuestro plato más popular preparado con
              tofu. (600 CAL) 12
              <p className="text-[16px]">
                The vegetarian version of our most popular dish, but made with
                tofu. (600 CAL) 12
              </p>
            </p>
          </h1>
          <img className="" src={dy} alt="foot" />
          <h1 className="text-[24px]">
            THE ORIGINAL DYNAMITE SHRIMPS
            <p className="text-[16px]">
              Camarones rebosados con una deliciosa salsa picante. (620 CAL) 13
              Battered shrimp, topped with a delicious hot sauce (620 CAL) 13
            </p>
          </h1>
          <img className="" src={ed} alt="foot" />
          <h1 className="text-[24px]">
            EDAMAME
            <p className="text-[16px]">
              Servidas al vapor con un toque de sal Kosher. (400 CAL) 8 Steamed
              to order, tossed with kosher salt. (400 CAL) 8
            </p>
          </h1>
          <img className="" src={ca} alt="foot" />
          <h1 className="text-[24px]">
            TEMPURA CALAMARI
            <p className="text-[16px]">
              Anillos de calamar cubiertos en tempura y salteados con Hunan Salt
              y cebollines. Con salsa Wasabi Aioli. (720 CAL) 13 Calamari rings
              in tempura and sautéed with Hunan Salt and chives. With Wasabi
              Aioli sause. (720 CAL) 13
            </p>
          </h1>
          <img className="" src={bbq} alt="foot" />
          <h1 className="text-[24px]">
            CHANG’S BBQ SPARE RIBS
            <p className="text-[16px]">
              Seis costillas de cerdo preparadas al wok con un toque de salsa
              BBQ asiática. (1230 CAL) 14.5 Six pork spare ribs, prepared in a
              wok with a touch of Asian BBQ sauce. (1230 CAL) 14.5
            </p>
          </h1>
          <img className="" src={st} alt="foot" />
          <h1 className="text-[24px]">
            NORTHERN STYLE SPARE RIBS
            <p className="text-[16px]">
              Seis costillas de cerdo servidas con sal de cinco especias. (1130
              CAL) 14.5 Six pork spare ribs served with dry rub five-spice
              seasoning. (1130 CAL) 14.5
            </p>
          </h1>

          <img className="" src={be} alt="foot" />
          <h1 className="text-[24px]">
            CRISPY GREEN BEANS
            <p className="text-[16px]">
              Habichuelas tiernas levemente empanadas y servidas crujientes con
              una salsa ligeramente picante. (1040 CAL) 9.5 Lightly breaded
              green beans served with slightly spicy dipping sauce. (1040 CAL)
              9.5
            </p>
          </h1>
</div>
          <h1 className="text-[44px]">DIM SUM</h1>
          <div >
            <img className="" src={egg} alt="foot" />
            <h1 className="text-[24px]">
              HOUSEMADE EGG ROLLS
              <p className="text-[16px]">
                Rellenos de cerdo marinado y vegetales, enrollados a mano.
                Acompañados de una salsa agridulce con mostaza. (2) (320 CAL) 8
                Hand rolled eggrolls stuffed with pork and vegetables. Served
                with our sweet & sour mustard sauce. (2) (320 CAL) 8
              </p>
            </h1>
            <img className="" src={ha} alt="foot" />
            <h1 className="text-[24px]">
              HANDMADE DUMPLINGS
              <p className="text-[16px]">
                Servidos al vapor o pan-fried. CERDO (1130 CAL) 11 | CAMARONES
                (260-340 CAL) 12.5 Pan-fried or steamed. PORK (1130 CAL) 11 |
                SHRIMP (260-340 CAL) 12.
              </p>
            </h1>
            <img className="" src={sp} alt="foot" />
            <h1 className="text-[24px]">
              SPRING ROLLS
              <p className="text-[16px]">
                Rellenos de una mezcla de vegetales frescos y crujientes.
                Servidos con una salsa agridulce. (2) (230 CAL) 6.5 Crispy rolls
                with julienned vegetables. Served with sweet & sour sauce. (2)
                (230 CAL) 6.5
              </p>
            </h1>
            <img className="" src={crab} alt="foot" />
            <h1 className="text-[24px]">
              HAND-FOLDED CRAB WONTONS
              <p className="text-[16px]">
                Seis crujientes wontons rellenos de una mezcla de cangrejo,
                queso crema, pimientos rojos y verdes y cebollines picados.
                Servidos con una salsa de ciruela. (610 CAL) 11 Six crunchy
                wontons filled with creamy crab filling, bell pepper, green
                onion & spicy plum sauce. (610 CAL) 11
              </p>
            </h1>
          </div>
        </div>
      </div>

  );
};
export default Aperitivos;
