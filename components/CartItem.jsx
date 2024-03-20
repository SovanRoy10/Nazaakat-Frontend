import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

export default function CartItem(props) {
    // console.log(props.cart)
  return (
    <div className="p-5 shadow-lg border rounded-md m-5">
      <div className=" flex items-center ">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            src={props.cart.image}
            alt="photo"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">{props.cart.title}</p>
          <p className="opacity-70">{props.cart.description}</p>
          <div className="flex space-x-3 items-center ">
            <p className="text-2xl tracking-tight text-gray-900 mt-5">
              ₹{props.cart.price}
            </p>
            <s className="text-2xl tracking-tight text-gray-900 mt-5 opacity-60 ">
              ₹{props.cart.prevPrice}
            </s>
            <p className="text-xl text-green-600 mt-5 tracking-tighter">
              {props.cart.offer} % Off
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        {/* <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3</span>
          <IconButton
            sx={{
              color: "#2763e6",
            }}
          >
            <AddCircleOutlineIcon />
          </IconButton>
        </div> */}

        <div>
          <button
            onClick={() => props.handleRemoveItem(props.cart.id)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-500"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
