import gek from "../img/menu de temporada/Dynamite.jpg";
import em from "../img/menu de temporada/EmperorsStrawberry.jpg";
import ga from "../img/menu de temporada/GarlicNoodles.jpg";
import ko from "../img/menu de temporada/KoreanBulgogi.jpg";

const Temporada = () => {
  return (
    <div className="ml-7 ">
      <h2 className="text-white text-[44px] leading-1 text-center  m-8  ">
        menu de temporada
      </h2>
      <div className=" flex flex-col  ">
        <div className=" flex flex-row">
        <img className="" src={gek} alt="foot" />
        <h3 className="text-white border-t-2  text-[24px] underline ml-6">
          dynamite roll
          <p className="text-white text-[16px] no-underline ">
            Rollo elaborado con kanikama, pepino, aguacate, cebollines, coronado
            de camarones tempurizados y bañados en salsa dinamita, terminados
            con salsa de anguila y sriracha. 12
          </p>
        </h3>
        </div>
       

        <img className="" src={ko} alt="foot" />
        <h6 className="text-white text-[24px]">
          KOREAN BULGOGI STEAK
          <p className="text-white text-[16px]">
            New York Strip con un sabroso glaseado bulgogi, papas crujientes y
            cebolla picada. 39
          </p>
        </h6>

        <img className="" src={ga} alt="foot" />
        <h5 className="text-white text-[24px]">
          GARLIC NOODLES
          <p className="text-white text-[16px]">
            Fideos chinos mezclados con ajo, cebollines, chili pepper flakes y
            salsa con tonos agridulces. Servidos con pepino fresco rebanado y
            coronados con cilantro. 11
          </p>
        </h5>

        <img className="" src={em} alt="foot" />

        <h4 className=" text-white text-[24px]">
          EMPEROR'S STRAWBERRY ROLL
          <p className="text-white text-[16px]">
            Rollos rellenos de cheescake y fresas cubiertos en azúcar. 8
          </p>
        </h4>
      </div>
    </div>
  );
};
export default Temporada;
