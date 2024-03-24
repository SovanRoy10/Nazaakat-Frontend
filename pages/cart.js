import CartItem from "@/components/CartItem";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/features/cartSlice";
import toast from "react-hot-toast";

export default function Cart({ btnText = "Checkout" }) {
  const router = useRouter();
  const cartItems = useSelector((state) => state.cart.cart);
  // console.log(cartItems);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
    toast.success("Item removed from cart")
  };

  const handleCheckout = () => {
    // nagivate("/checkout?step=2");
    router.push("/checkout?step=2");
  };

  const calculateTotalPrice = (cartItems) => {
    let total = 0;
    cartItems.forEach((item, index) => {
      total += item.price;
    });

    // return total.toFixed(2);
    return total;
  };

  if (cartItems.length === 0)
    return (
      <p className="text-3xl text-center py-16 font-bold">
        Oops ! The cart is empty now 😔{" "}
      </p>
    );

  return (
    <div className="mt-5">
      <div className="lg:grid grid-cols-3  relative">
        <div className="col-span-2">
          {cartItems.map((item, index) => {
            // return <CartItem key={item.id} cart={item} handleRemoveItem = {handleRemoveItem}/>;   // version 2
            return (
              <CartItem
                key={`${item.id}-${index}`}
                cart={item}
                handleRemoveItem={handleRemoveItem}
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
