const FoodCard = (props) => {
  return (
    <div className=" flex flex-row   border-t border-stone-600   mt-4  ">
      <img className="mt-6 max-w-[15rem]  " src={props.img} alt="foot" />
      <div className="w-[100%] ml-6 ">
        <h1 className="text-white  text-[24px]  underline truncate mt-6 font-serif ">
          {props.title} »
        </h1>

        <p className="text-white  text-[16px] mt-2 font-serif ">
          {props.description}
        </p>
        <p className="text-white  text-[12px] mt-2 font-serif ">
          {props.text}
        </p>
      </div>
    </div>
  );
};
export default FoodCard;
