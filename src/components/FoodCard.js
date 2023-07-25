const FoodCard = (props) => {
  return (
    <div className=" flex   border-t border-stone-600 mt-4 ">
     {props.img && <img className="mt-6 max-w-[16rem]" src={props.img} alt="foot" />} 
      <div className="w-[100%] ml-3 ">
        <h1 className="text-red-500 text-[24px]  underline truncate mt-6 font-serif ">
          {props.title} »
        </h1>

        <p className="text-red-500  text-[16px] mt-2 font-serif ">
          {props.description}
        </p>
        <p className="text-red-500  text-[12px] mt-2 font-serif ">
          {props.text}
        </p>
      </div>
    </div>
  );
};
export default FoodCard;
