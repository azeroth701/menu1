const FoodCard = (props) => {
  return (
    <div className=" flex flex-row   border-t border-stone-600   mt-4 ">
      <img className="mt-6 max-w-[15rem]  " src={props.img} alt="foot" />
      <div className="w-[100%] ml-8 ">
        <h1 className="text-white  text-[24px]  underline truncate mt-6  ">
         {props.title} »
        </h1>

        <p className="text-white  text-[16px] mt-2  ">
          {props.description}
        </p>
      </div>
    </div>
  );
};
export default FoodCard;
