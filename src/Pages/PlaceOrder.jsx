import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotral from "../components/CartToral";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../Context/ShopContext";
const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {navigate} = useContext(ShopContext)
  return (
    <div className=" flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh]">
      {/* --------------------left side----------------------------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            placeholder="First Name"
            className="border border-gray-300 rounded px-3.5 py-1.5 w-full  "
            type="text"
          />
          <input
            placeholder="Last Name"
            className="border border-gray-300 rounded px-3.5 py-1.5 w-full  "
            type="text"
          />
        </div>
        <input
          placeholder="Email address"
          type="email"
          className="border border-gray-300 rounded px-3.5 py-1.5 w-full  "
        />
        <input
          placeholder="street"
          className="border border-gray-300 rounded px-3.5 py-1.5 w-full  "
          type="text"
        />
        <div className="flex gap-3">
          <input
            placeholder="City"
            className="border border-gray-300 rounded px-3.5 py-1.5 w-full  "
            type="text"
          />
          <input
            placeholder="State"
            className="border border-gray-300 rounded px-3.5 py-1.5 w-full  "
            type="text"
          />
        </div>
        <div className="flex gap-3">
          <input
            placeholder="Zip code "
            className="border border-gray-300 rounded px-3.5 py-1.5 w-full  "
            type="text"
          />
          <input
            placeholder="Cuntery"
            className="border border-gray-300 rounded px-3.5 py-1.5 w-full  "
            type="number"
          />
        </div>
        <input
          placeholder="Phone number "
          className="border border-gray-300 rounded px-3.5 py-1.5 w-full  "
          type="number"
        />
      </div>
      {/* -------------------------------right side--------------------------------------------- */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotral />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ---------------------------PAYMENT METHOD SELECTION */}
          <div className=" flex  flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setMethod("strip")}
              className="flex items-center p-2 px-3 cursor-pointer gap-3 border"
            >
              <p
                className={`min-w-3.5 h-3.5  rounded-full ${
                  method === "strip" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center p-2 px-3 cursor-pointer gap-3 border"
            >
              <p
                className={`min-w-3.5 h-3.5  rounded-full ${
                  method === "razorpay" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center p-2 px-3 cursor-pointer gap-3 border"
            >
              <p
                className={`min-w-3.5 h-3.5  rounded-full ${
                  method === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="text-gray-500 font-medium mx-2 text-sm">
                CASHE ON DELIVERY
              </p>
            </div>
          </div>
          <div className=" w-full text-end mt-8">
            <button onClick={()=>navigate('/order')} className="bg-black text-white px-16 py-3 text-sm">PALCE ORDER</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
