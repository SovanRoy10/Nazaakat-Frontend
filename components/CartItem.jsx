import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function CartItem(props) {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setQuantity(props.quantity);
  }, [props.quantity]);

  const handleAddQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="p-5 shadow-lg border rounded-md m-5">
      <div className="flex items-center">
        <div className="md:w-[5rem] md:h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src={props.cart.image}
            alt="photo"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="ml-5 space-y-1">
          <div className="flex justify-between flex-col md:flex-row">
            <p className="font-semibold text-sm md:text-base">{props.cart.title}</p>
            <div className="flex font-bold gap-3 border border-gray-400 items-center w-fit text-sm md:text-2xl my-2 md:my-0">
              <button
                onClick={() => props.handleRemoveOneItem(props.cart.id)}
                disabled={quantity <= 1}
                className="border-r px-2 border-gray-400 hover:bg-red-500 hover:text-white"
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={() =>
                  props.handleAddToCart(
                    props.cart.id,
                    props.cart.title,
                    props.cart.description,
                    parseInt(props.cart.price),
                    parseInt(props.cart.oldPrice),
                    props.cart.offer,
                    props.cart.image
                  )
                }
                className="border-l px-2 border-gray-400 hover:bg-green-500 hover:text-white"
              >
                +
              </button>
            </div>
          </div>
          <p className="opacity-70 text-xs md:text-sm">{props.cart.description}</p>
          <div className="flex items-center space-x-3">
            <p className="md:text-2xl tracking-tight text-gray-900">
              ₹{props.cart.price}
            </p>
            
            <p className="md:text-xl text-black tracking-tighter">
              {props.cart.size}
            </p>
            <div
              className={`font-bold border px-3 py-1 rounded md:h-7 md:w-7 h-5 w-5`}
              style={{ backgroundColor: `#${props.cart.color}` }}
            />
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center gap-5 text-xs md:text-base">
          <button
            onClick={() => props.handleRemoveItem(props.cart.id)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
          >
            Remove
          </button>

          <p className="font-bold md:text-lg text-gray-700 border border-black p-1">
            Total: ₹{(quantity * props.cart.price).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
