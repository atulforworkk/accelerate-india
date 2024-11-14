import PostAuthHeader from "@/components/postAuthHeader/PostAuthHeader";
import TransactionView from "@/composites/transaction/TransactionView";
import { Button, Input, Radio } from "@mantine/core";
import images from "images/images";
import React from "react";
import { useNavigate } from "react-router-dom";
type Props = {};

const MyWallet = (props: Props) => {

  return (
    <div>
      <PostAuthHeader heading="My Wallet" />
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-2">
        {/* USER SECTION  */}
        <div className="border round-md col-span-6 ">
          <div>
            <img
              src={images.userImage}
              alt="userImage"
              className="w-[46px] h-[46px] p-[8px] pt-2 rounded-full "
            />
          </div>
          <div className="w-10/12">
            <div className="flex justify-between">
              <h1 className="font-bold">Alex Smith </h1>
              <div className="flex px-3 py-0.5 rounded-full bg-light-purple justify-around">
                <img src={images.verfiedBadge} alt="" className="" />
                <p className="mx-1">Verfied</p>
              </div>
            </div>
            <div>
              <p>+91 8930-188-923</p>
            </div>
          </div>
        </div>
        {/* available Credit */}
        <div className="rounded-md  col-span-6 bg-light-gray border">
          <h1 className="m-4 font-bold">Available Credits</h1>
          <div className="flex items-center m-4">
            <img src={images.brandlogo} alt="" />
            <h1 className="font-bold text-3xl mx-2">0</h1>
          </div>
          <p className="text-sm m-4 font-light">
            Credits can be used for all bookings, food orders, events.
          </p>
          <hr className=" border-t-2 border-gray-300" />
          <button className="bg-main-color text-white text-xs p-1.5 rounded-full m-3">
            What are Credits?
          </button>
        </div>
        {/* available Credit  */}
        <div className="">
          <div className=" w-full  rounded-2xl flex  gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <div>
        <TransactionView />
      </div>
    </div>
  );
};

export default MyWallet;

const Card = () => {
  const navigate = useNavigate();
  const handleClick =()=>{
    navigate("/payment")
  }
  return (
    <div className="border rounded-2xl bg-light-gray border-black min-w-[350px]">
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
      <div className="flex items-center">
        <Radio />
        <img src={images.brandlogo} alt="" className="w-4 h-4 m-1 " />
        <h1 className="font-semibold text-xl m-1">15000</h1>
        <p className="text-sm font-light m-1">Credits</p>
      </div>
      <p className="text-sm font-light m-1">with</p>
      <div className="flex items-center">
        <h1 className="font-semibold text-xl m-1">15000</h1>
        <h1 className="font-semibold text-xl m-1">14500</h1>
        <p className="text-sm font-light m-1">Credits</p>
      </div>
      <p className="text-sm font-light m-1">or</p>
      <h1 className="font-semibold text-xl m-1">Enter Amount Manually </h1>
      <input
        className="rounded-full w-full p-2 my-3"
        placeholder="Enter here"
      />
      <button
        className="bg-main-color text-white p-2 w-full rounded-full my-3"
        onClick={handleClick}
      >
        Proceed to pay
      </button>
    </div>
  );
};
