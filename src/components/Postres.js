import ba from "../img/postres/banana-spring-rolls.jpg";
import ea from "../img/postres/chocolate-wall-cake.jpg";
import gu from "../img/postres/Guava-Wontons.jpg";
import fle from "../img/postres/Chocolate-Souffle.jpg";
import FoodCard from "./FoodCard";
const Postres = () => {
  return (
    <div className="text-white">
            <div id="postres-section"></div>

      <h1 className="text-[44px] m-4">Postres</h1>

      <FoodCard
        img={ba}
        title={"BANANA SPRING ROLLS"}
        description="Seis pedazos de guineo envueltos en una crujiente plantilla de harina de arroz, servidos con mantecado de coco y piña, rociados con salsa de caramelo y vainilla. (1030 CAL) 8.5
        Six pieces of banana wrapped in a crispy rice flour tortilla, served with coconut and pineapple ice cream, drizzled with caramel-vanilla sauce. (1030 CAL) 8.5"
      />
      <FoodCard
        img={ea}
        title={"THE GREAT WALL OF CHOCOLATE® "}
        description="Seis pisos de bizcocho de chocolate con chocolate chips por encima, servido con berries de temporada y salsa de frambuesa. (1730 CAL) 11
        Six layers of chocolate cake, chocolate frosting, semi-sweet chocolate chips, served with seasonal berries and raspberry sauce. (1730 CAL) 11"
      />
      <FoodCard
        img={gu}
        title={"GUAVA CHEESE WONTONS "}
        description="Cuatro crujientes y cremosos wontons rellenos de queso crema y guayaba. (370 CAL) 7
        Four crunchy and creamy wontons filled with cream cheese and guava. (370 CAL) 7"
      />
      <FoodCard
        img={fle}
        title={"CHOCOLATE SOUFFLÉ "}
        description="Bizcocho soufflé de chocolate Gluten Free, servido con mantecado de vainilla y salsa de frambruesa. 9
        Gluten Free chocolate souffle cake, served with vanilla ice cream and raspberry sauce. 9"
      />
    </div>
  );
};
export default Postres;
