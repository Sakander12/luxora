import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Title from "../components/Title";

const CartToral = () => {
  const { getCartAmount, currency, delivery_fee } = useContext(ShopContext);
  return (
    <div className="w-full">
      <div>
        <Title text1={"CART"}   text2={"TOTAL"} />
      </div>
      <div className=" flex flex-col mt-2 gap-2 text-sm">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>
            {currency} {getCartAmount}.00
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping fee</p>
          <p>
            {" "}
            {currency} {delivery_fee}
          </p>
        </div>
        <hr />
        <div className="flex justify-between">
          <b>Total</b>
          <b>
            {currency}
            {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CartToral;
