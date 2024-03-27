import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import "remixicon/fonts/remixicon.css";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

export default function Product(props) {
  const router = useRouter();
  const {pathname} = router;
  const dispatch = useDispatch();
  const handleAddToCart = (id, title, description, price, image) => {
    price = parseInt(price);
    dispatch(addToCart({ id, title, description, price, image }));
    toast.success("Item added to cart");
  };
  return (
    <div className="m-5 shadow-md h-fit">
      <Link href={`/allproducts/${props.id}`}>
        <div
          className={`relative flex w-${props.width} md:flex-col rounded-t-xl bg-white bg-clip-border text-gray-700`}
        >
          <div
            className={`relative mx-4 mt-4 h-${props.height}  overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700  flex items-center justify-center`}
          >
            <img
              src={props.images}
              className={` object-cover hover:scale-110  duration-200 md:h-[300px] object-center md:max-w-[300px] md:min-w-[250px] ${pathname==="/allproducts"? undefined:"min-w-[130px]"}`}
              alt="product"
            />
          </div>
          <div className="p-6">
            <div className="mb-2 flex flex-col justify-between">
              <p className="block font-sans text-base font-medium l   eading-relaxed text-blue-gray-900 antialiased">
                {props.title.length > 36
                  ? `${props.title.substring(0, 36)}...`
                  : props.title}
              </p>
              <p className=" font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased flex md:gap-5 gap-2">
                <span className="mr-2">
                  ₹{parseInt(props.price).toFixed(2)}
                </span>
                <s> ₹{parseInt(props.price).toFixed(2)}</s>
              </p>
            </div>
            <p className="font-sans text-xs md:text-sm font-normal leading-normal text-black antialiased opacity-95 flex justify-between ">
              <span>
                {props.description.length > 70
                  ? `${props.description.substring(0, 70)}...`
                  : props.description}
              </span>
              <span className="bg-green-600 text-white rounded-sm px-1 text-xs flex h-fit py-1 ">
                {/* <span>{props.rating.toFixed(1)}</span>{" "} */}
                <span>{4}</span> <i className="ri-star-fill text-xs"></i>
              </span>
            </p>
          </div>
        </div>
      </Link>
      <button
        onClick={() =>
          handleAddToCart(
            props.id,
            props.title,
            props.description,
            props.price,
            props.images
          )
        }
        className="block w-full text-center align-middle transition-all  focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <div className="relative inline-block px-4 py-2 font-medium group w-full">
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#c5ce9c] group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-[#c5ce9c] group-hover:bg-[#D4DCAE]"></span>
          <span className="relative text-black font-bold">Add To Cart</span>
        </div>
      </button>
    </div>
  );
}
