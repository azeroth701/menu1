import so from "../img/sopa&ensalada/ChangsChickenNoodleSoup.jpg";
import wo from "../img/sopa&ensalada/wonton-soup-.jpg";
import sa from "../img/sopa&ensalada/asian-caesar-salad-.jpg";
import spy from "../img/sopa&ensalada/spicy-crab-salad-.jpg";

const Sopas = () => {
  return (
    <div className=" text-white">
      <h1 className="text-[44px]">sopas & ensaladas</h1>
      <div className="text-white grid grid-cols-2 gap-2">
      <img className="" src={so} alt="foot" />
      <h2 className="text-[22px]">
        CHANG'S CHICKEN NOODLE SOUP
        <p className="text-[16px]">
          Nuestra versión de una sopa casera con fideos de arroz, pollo, setas,
          tomates, cilantro y caldo de pollo ligeramente picante. Preparada al
          momento. TAZA (150 CAL) 5 | PARA COMPARTIR (550 CAL) 12 Our version of
          a homemade rice noodle soup with chicken, mushrooms, tomatoes,
          coriander and slightly spicy chicken broth. Made fresh. CUP (150 CAL)
          5 | SHARING PORTION (550 CAL) 12
        </p>
      </h2>
      <img className="" src={wo} alt="foot" />
      <h2 className="text-[22px]">
        WONTON SOUP
        <p className="text-[16px]">
          Consomé de pollo con una combinación de camarones, wontons de cerdo,
          water chestnuts, rebanadas de pechuga de pollo, setas y hojas frescas
          de espinaca. Preparada al momento. TAZA (130 CAL) 5 | PARA COMPARTIR
          (520 CAL) 12 Chicken consommé with a combination of shrimp, pork
          wontons, water chestnuts, chicken, mushrooms and fresh spinach leaves.
          Made Fresh. CUP (130 CAL) 5 | SHARING PORTION (520 CAL) 12
        </p>
      </h2>
      <img className="" src={sa} alt="foot" />
      <h2 className="text-[22px]">
        ASIAN CAESAR SALAD
        <p className="text-[16px]">
          Lechuga romana, queso parmesano, semillas de ajonjolí tostado,
          crutones de wonton y aderezoCaesar hecho en casa. (700 CAL) 8 | MEDIA
          PORCIÓN (350 CAL) 4.5 | POLLO (880 CAL) 11 | CAMARONES (820 CAL) 16 |
          CHURRASCO (1030 CAL) 22 | SALMÓN (1010 CAL) 19 Romaine lettuce,
          parmesan cheese, toasted sesame seeds, wonton croutons tossed with our
          homemade Caesar dressing. (700 CAL) 8 | HALF PORTION (350 CAL) 4.5
          |CHICKEN (880 CAL) 11 | SHRIMP (820 CAL) 16 | SKIRT STEAK (1030 CAL)
          22 | SALMON (1010 CAL) 19
        </p>
      </h2>
      <img className="" src={spy} alt="foot" />
      <h2 className="text-[22px]">SPICY CRAB SALAD 
        <p className="text-[16px]">Kanikama mix sobre ensalada verde, cebollines y semillas de ajonjolí, mezclados con vinagre de sushi. (400 CAL) 12
Kanikama mix over green salad, chives and sesame seeds mixed with sushi vinegar. (400 CAL) 12
</p>
      </h2>
      </div>
    </div>
  );
};
export default Sopas;
