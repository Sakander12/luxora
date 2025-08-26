import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    setCartItems((prev) => {
      // Create a new object to avoid mutating state directly
      const newCartItems = { ...prev };
      // Initialize the nested object if it doesn't exist
      if (!newCartItems[itemId]) {
        newCartItems[itemId] = {};
      }
      // Update the quantity for the specific size
      newCartItems[itemId][size] = quantity;
      return newCartItems;
    });
  };
  // how to get amount from
  const getCartAmount = async() =>{
    let totalAmount = 0;
    for ( const items in cartItems){
      let itemInfo = products.find((product)=>product._id ===items);
      for(const item in cartItems[items]){
        try {
          if(cartItems[item][items]>0){
            totalAmount += itemInfo.price * cartItems[item][items]
          }
        } catch (error) {
          
        }
      }
    }
    return totalAmount 
  }

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (!size) {
      toast.error("select product size");
      return;
    }

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
