import { createContext, useEffect, useState } from "react";
import { products } from "../../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

  const currency = '$';
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});// to handel car me add hone wale items 

  const navigate =useNavigate()


  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select product Size ')
      return;
    }

    let cartData = structuredClone(cartItems);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else {
        cartData[itemId][size] = 1;
      }

    }
    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems])

  const getCartCount = () => {
    let totalCount = 0;

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
         
   if(cartItems[items][item]>0){
    totalCount+=cartItems[items][item];

   }

        } catch (error){

        }

      }
    }
return totalCount;
  }

  const updateQuantity = (itemId, size, quantity) => {
  let cartData = structuredClone(cartItems);

  if (quantity === 0) {
    // agar quantity 0 hai toh item delete kar do
    delete cartData[itemId][size];

    // agar product ke andar aur sizes bhi empty ho gaye toh productId bhi delete kar do
    if (Object.keys(cartData[itemId]).length === 0) {
      delete cartData[itemId];
    }
  } else {
    cartData[itemId][size] = quantity;
  }

  setCartItems(cartData);  // ✅ ab naya object set ho raha hai
};

const getCartAmount=()=>{
  let totalAmount=0;
  for(const items in cartItems){
    let itemInfo=products.find((product)=>product._id===items);
    for(const item in cartItems[items]){
      try{
        if(cartItems[items][item]>0){
          totalAmount+=itemInfo.price*cartItems[items][item];
        } 
      }catch(error){
          console.error(error);
        }
    }
  }
  return totalAmount;
}


  const value = {
    products, currency, delivery_fee, search, setSearch, showSearch, setShowSearch, addToCart,getCartCount,cartItems,updateQuantity,getCartAmount,navigate
  };

  return (

    <ShopContext.Provider value={value} >
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
