import CartItem from "@/components/CartItem";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  addToCart,
  removeOneFromCart,
  clearCart
} from "@/features/cartSlice";
import toast from "react-hot-toast";
import { useEffect } from "react";

export default function Cart({ btnText = "Checkout" }) {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleAddToCart = (id, title, description, price, image) => {
    dispatch(addToCart({ id, title, description, price, image }));
    toast.success("Item added to cart");
  };

  const handleRemoveOneItem = (id) => {
    dispatch(removeOneFromCart(id));
    toast.success("One item removed from cart");
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from cart");
  };

  const handleCheckout = () => {
    router.push("/checkout?step=1");
  };

  const calculateTotalPrice = (cartItems) => {
    let total = 0;
    cartItems.forEach((item, index) => {
      total += item.price;
    });

    // return total.toFixed(2);
    return total;
  };


  useEffect(()=>{
    if(typeof window === undefined) return;
    if (window.location.href.includes("success")){
      dispatch(clearCart());
    }
  },[])

  if (typeof window!=='undefined' && window.location.href.includes("success")) {
    return (
      <div className="text-3xl text-center flex flex-col gap-10 my-16">
        <p className="font-bold">Thanks for your order! 🎉</p>
        <p>We will call/email you when your order will be sent.</p>
      </div>
    );
  }

  if (cartItems.length === 0)
    return (
      <p className="text-3xl text-center py-16 font-bold">
        Oops ! The cart is empty now 😔{" "}
      </p>
    );

  const distinctProductIds = [...new Set(cartItems.map((item) => item.id))];

  return (
    <div className="mt-5">
      <div className="lg:grid grid-cols-3  relative">
        <div className="col-span-2">
          {distinctProductIds.map((productId, index) => {
            const item = cartItems.find((item) => item.id === productId);
            if (!item) return null;
            return (
              <CartItem
                key={`${item.id}-${index}`}
                cart={item}
                handleRemoveItem={handleRemoveItem}
                handleRemoveOneItem={handleRemoveOneItem}
                handleAddToCart={handleAddToCart}
                quantity={
                  cartItems.filter((cartItem) => cartItem.id === item.id).length
                }
              />
            );
          })}
        </div>

        <div className="px-5 sticky top-0 h-[100vh] ">
          <div className="border mt-5 p-3">
            <div className="flex flex-col justify-center items-center">
              <p
                className={`uppercase transparentHeading text-5xl hover:text-gray-800 `}
              >
                Price Details
              </p>
            </div>

            <div className="space-y-3 font-semibold mt-5">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹{calculateTotalPrice(cartItems)}</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Discount</span>
                <span className="text-green-700">- ₹0</span>
              </div>

              <div className="flex justify-between pt-3 text-black">
                <span>Delivery Charge</span>
                <span className="text-green-700">Free</span>
              </div>

              <div className="flex justify-between pt-3 text-black font-bold text-lg border-t-4">
                <span>Total Amount</span>
                <span className="text-green-700">
                  ₹{calculateTotalPrice(cartItems)}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-green-600 py-2 text-white rounded-lg mt-5 hover:bg-green-500 text-lg"
            >
              {btnText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
