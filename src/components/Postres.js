import ba from "../img/postres/banana-spring-rolls.jpg";
import ea from "../img/postres/chocolate-wall-cake.jpg";
import gu from "../img/postres/Guava-Wontons.jpg";
import fle from "../img/postres/Chocolate-Souffle.jpg";
const Postres = () => {
  return (
    <div className="text-white">
      <h1 className="text-[44px] m-4">Postres</h1>
<div className="grid grid-cols-2 gap-2">
      <img className="m-5" src={ba} alt="foot" />
      <h1 className="text-[22px]">
        BANANA SPRING ROLLS
        <p className="text-[16px] m-4 text-left">
          Seis pedazos de guineo envueltos en una crujiente plantilla de harina
          de arroz, servidos con mantecado de coco y piña, rociados con salsa de
          caramelo y vainilla. (1030 CAL) 8.5 Six pieces of banana wrapped in a
          crispy rice flour tortilla, served with coconut and pineapple ice
          cream, drizzled with caramel-vanilla sauce. (1030 CAL) 8.5
        </p>
      </h1>

      <img className="m-5" src={ea} alt="foot" />
      <h1 className="text-[22px]">
        THE GREAT WALL OF CHOCOLATE® »
        <p className="text-[16px]">
          Seis pisos de bizcocho de chocolate con chocolate chips por encima,
          servido con berries de temporada y salsa de frambuesa. (1730 CAL) 11
          Six layers of chocolate cake, chocolate frosting, semi-sweet chocolate
          chips, served with seasonal berries and raspberry sauce. (1730 CAL) 11
        </p>
      </h1>
      <img className="m-5" src={gu} alt="foot" />
      <h1 className="text-[22px]">GUAVA CHEESE WONTONS 
        <p className="text-[16px]">Cuatro crujientes y cremosos wontons rellenos de queso crema y guayaba. (370 CAL) 7
Four crunchy and creamy wontons filled with cream cheese and guava. (370 CAL) </p>
      </h1>
      <img className="m-5" src={fle} alt="foot" />
      <h1 className="text-[22px]">CHOCOLATE SOUFFLÉ
        <p className="text-[16px]">Bizcocho soufflé de chocolate Gluten Free, servido con mantecado de vainilla y salsa de frambruesa. 9
Gluten Free chocolate souffle cake, served with vanilla ice cream and raspberry sauce. 9</p> </h1>
</div>
    </div>
  );
};
export default Postres;
