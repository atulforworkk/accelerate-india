import { Radio } from "@mantine/core";
import images from "images/images";
import { useNavigate } from "react-router-dom";
import ManualAmount from "../ManualAmount/ManualAmount";


const Card = () => {
    const navigate = useNavigate();
    const handleClick = () => {
      navigate("/payment");
    };
    return (
      <div className="border rounded-2xl bg-light-gray  min-w-[350px]">
        <div className="flex justify-between items-center m-3 ">
          <h1 className="font-bold">All credits to your wallet</h1>
          <div className=" px-3  py-0.5 rounded-full bg-light-purple justify-around">
            1 Credit = 1
          </div>
        </div>
        <p className="text-sm m-3 font-light">
          Choose from our most purchased options.
        </p>
        {/* money component */}
        <div className="border border-main-color rounded-2xl flex flex-col  ">
        <div className="flex items-center">
          <Radio />
          <img src={images.brandlogo} alt="" className="w-4 h-4 m-1 " />
          <h1 className="font-semibold text-xl m-1">15000</h1>
          <p className="text-sm font-light m-1">Credits</p>
          <p className="mx-auto">30% off</p>
        </div>
        <p className="text-sm font-light m-1 px-5">with</p>
        <div className="flex items-center px-5">
        <h1 className="font-semibold text-xl m-1 line-through text-[#00083046]">15000</h1>
          <h1 className="font-semibold text-xl m-1">14500</h1>
          <p className="text-sm font-light m-1">Credits</p>
        </div>
        </div>
        <p className="text-sm font-light m-1">or</p>
        <ManualAmount/>
      </div>
    );
  };
  export default Card;