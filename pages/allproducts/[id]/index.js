import { useState } from "react";
import { RadioGroup } from "@headlessui/react";
// import Rating from "@mui/material/Rating";
// import Grid from "@mui/material/Grid";

// import ProductReviewCard from "./ProductReviewCard";
// import HeadingText from "./HeadingText";
// import { Box, LinearProgress } from "@mui/material";
// import Loader from "./Loader";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
// import axios from "axios";

import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cartSlice";
// import { ElevatorSharp } from "@mui/icons-material";

import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import Loader from "@/components/Loader";

import { useEffect } from "react";

const product = {
  name: "Basic Tee 6-Pack",
  price: "₹192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://images.pexels.com/photos/12737493/pexels-photo-12737493.jpeg?auto=compress&cs=tinysrgb&w=400",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://media.istockphoto.com/id/1485808407/photo/earrings-displayed-for-sell.jpg?b=1&s=612x612&w=0&k=20&c=9Rwz793y36JdWafzTrB98L34TU8frCXQ55M8IQt9j6s=",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://media.istockphoto.com/id/1427167656/photo/beautiful-earring-for-girls-and-women-beads-alloy-jhumki-earring.jpg?b=1&s=612x612&w=0&k=20&c=RhGMaRUA8RWBvFxVg6heJWNStTa6sp4RPiTs8hopTQ0=",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://media.istockphoto.com/id/1465816268/photo/indian-traditional-jewellery-displayed-in-a-street-shop-for-sale-in-pune-maharashtra-indian.jpg?b=1&s=612x612&w=0&k=20&c=NqxAzDfQCISAd3Zm5EARzhtvi27deaBlSFQkzVC9YAI=",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],

  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function ProductDetails({ product, category }) {
  // console.log(product);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const dispatch = useDispatch();
  const handleAddToCart = (id, title, description, price, image) => {
    price = parseInt(price);
    dispatch(addToCart({ id, title, description, price, image }));
  };

  const [coverImage, setCoverImage] = useState(product.images[0]);
  // const [loading, setLoading] = useState(false);
  const [detailedProduct, setDetailedProduct] = useState({});

  const handleCoverImage = (image) => {
    setCoverImage(image);
  };

  if (loading)
    return (
      <div className="flex justify-center mt-16">
        <Loader />
      </div>
    );

  const fixSizes = (size) => {
    size = size.toLowerCase();
    size = size.trim();
    if (size === "s" || size === "small") return "S";
    if (size === "m" || size === "medium") return "M";
    if (size === "l" || size === "large") return "L";
    if (size === "xl" || size === "extra large") return "XL";
    if (size === "xxl" || size === "extra extra large") return "XXL";
    // Handle invalid sizes
    return "I";
  };

  const sizes = product.sizes.split(",").map((size) => fixSizes(size));
  const colors = product.colors.split(",");

  return (
    <div>
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="font-medium text-gray-500 hover:text-gray-600 text-sm">
              <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                {product.gender}
              </a>
            </li>
            <svg
              width={16}
              height={20}
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
            <li className="font-medium text-gray-500 hover:text-gray-600 text-sm">
              <a href="#" className="mr-2 text-sm font-medium text-gray-900">
                {category.name}
              </a>
            </li>
            <svg
              width={16}
              height={20}
              viewBox="0 0 16 20"
              fill="currentColor"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
            <li className="font-medium text-gray-500 hover:text-gray-600 text-sm">
              {product.title}
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 pt-10 px-4">
          {/* {image gallary} */}
          <div className="md:flex flex-col items-center hidden">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem] drop-shadow-md">
              {product && product.images && product.images.length > 0 && (
                <img
                  src={coverImage}
                  alt={product.title}
                  className="h-full w-full object-cover object-center cursor-pointer"
                />
              )}
            </div>

            <div className="flex-wrap space-x-5 justify-center flex">
              {product &&
                product.images &&
                product.images.map((item, index) => (
                  <div
                    className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4 drop-shadow-md"
                    key={index}
                    onMouseEnter={() => handleCoverImage(item)}
                  >
                    <img
                      src={item}
                      alt={item}
                      className="h-full w-full object-cover object-center cursor-pointer"
                    />
                  </div>
                ))}
            </div>
          </div>

          <div className="md:hidden block">
            <Swiper
              navigation={true}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              modules={[Pagination, Navigation]}
              className="mySwiper z-0"
            >
              {product &&
                product.images &&
                product.images.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div
                        className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg  mt-4 drop-shadow-md"
                        key={index}
                      >
                        <img
                          src={item}
                          alt={item}
                          className="h-full w-full object-cover object-center cursor-pointer"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>

          {/* {product details} */}
          <div className="mx-auto lg:col-span-1 max-w-[2xl] pb-16 sm:px-6 lg:max-w-[7xl] lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 ">
              <h1 className="text-lg lg:text-2xl font-semibold text-gray-900">
                {product.title}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0 ">
              <h2 className="sr-only">Product information</h2>
              <div className="flex space-x-5 items-center ">
                <p className="text-3xl tracking-tight text-gray-900 mt-5">
                  ₹{product.price}
                </p>
                <s className="text-3xl tracking-tight text-gray-900 mt-5 opacity-60 ">
                  ₹{product.price}
                </s>
                <p className="text-2xl text-green-600 mt-5 tracking-tighter">
                  20 % Off
                </p>
              </div>

              {/* Reviews */}
              {/* <div className="mt-6">
                  <div className="flex items-center space-x-3">
                    <Rating
                      name="half-rating-read"
                      defaultValue={2.5}
                      precision={0.1}
                      readOnly
                    />
                    <p className="opacity-50 text-sm">
                      {detailedProduct.productRating} ratings
                    </p>
                    <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      {detailedProduct.reviews?.length} reviews
                    </p>
                  </div>
                </div> */}

              <form className="mt-10">
                {/* Colors */}
                {/* <div>
                    <h3 className="text-base font-bold text-gray-900">Color</h3>

                    <RadioGroup
                      value={selectedColor}
                      onChange={setSelectedColor}
                      className="mt-4"
                    >
                      <RadioGroup.Label className="sr-only">
                        Choose a color
                      </RadioGroup.Label>
                      <div className="flex items-center space-x-3">
                        {product.colors.map((color) => (
                          <RadioGroup.Option
                            key={color.name}
                            value={color}
                            className={({ active, checked }) =>
                              classNames(
                                color.selectedClass,
                                active && checked ? "ring ring-offset-1" : "",
                                !active && checked ? "ring-2" : "",
                                "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                              )
                            }
                          >
                            <RadioGroup.Label as="span" className="sr-only">
                              {color.name}
                            </RadioGroup.Label>
                            <span
                              aria-hidden="true"
                              className={classNames(
                                color.class,
                                "h-8 w-8 rounded-full border border-black border-opacity-10"
                              )}
                            />
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div> */}
              </form>
              <button
                onClick={() =>
                  handleAddToCart(
                    product._id,
                    product.title,
                    product.description,
                    product.price,
                    product.images[0]
                  )
                }
                className="mt-10 flex w-full max-w-[200px] items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
              >
                Add to cart
              </button>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">{product.description}</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* <div className="mt-10">
                  <h3 className="text-base font-bold text-gray-900">
                    Highlights
                  </h3>
  
                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-base"
                    >
                      {product.highlights.map((highlight,index) => (
                        <li key={index} className="text-gray-400">
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div> */}

              <div id="sizes" className="text-xl font-bold mt-5">
                Size :
                <div className="flex gap-5 py-3">
                  {sizes.map((size, index) => {
                    return (
                      <div
                        key={size}
                        className="font-bold  border border-black px-3 py-1 rounded text-base hover:bg-gray-300"
                      >
                        {size}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-base font-bold text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* { rating and reviws} */}
        {/* <section>
            <HeadingText text="Recent Reviews & Rating" />

            <div className="border p-5 m-5">
              <Grid container spacing={7}>
                <Grid item xs={7}>
                  <div className="space-y-5">
                    {detailedProduct && detailedProduct.reviews ? (
                      detailedProduct.reviews.map((review, idx) => (
                        <ProductReviewCard key={idx} review={review} />
                      ))
                    ) : (
                      <p>No reviews available</p>
                    )}
                  </div>
                </Grid>

                <Grid item xs={5}>
                  <h1 className="text-xl font-semibold pb-1">
                    Product Ratings
                  </h1>
                  <div className="flex items-center space-x-3">
                    <Rating
                      name="half-rating-read"
                      defaultValue={4.6}
                      precision={0.5}
                      readOnly
                    />
                    <p className="opacity-60">
                      {" "}
                      {detailedProduct.productRating} Ratings
                    </p>
                  </div>

                  <Box className="space-y-5 my-5">
                    <Grid container alignItems="center" gap={2}>
                      <Grid item xs={2}>
                        <p>Excellent</p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress
                          variant="determinate"
                          value={60}
                          color="success"
                          sx={{
                            bgcolor: "#d0d0d0",
                            borderRadius: 4,
                            height: 7,
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid container alignItems="center" gap={2}>
                      <Grid item xs={3}>
                        <p>Very Good</p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress
                          variant="determinate"
                          value={25}
                          color="success"
                          sx={{
                            bgcolor: "#d0d0d0",
                            borderRadius: 4,
                            height: 7,
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid container alignItems="center" gap={2}>
                      <Grid item xs={2}>
                        <p>Good</p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress
                          variant="determinate"
                          value={10}
                          sx={{
                            bgcolor: "#d0d0d0",
                            borderRadius: 4,
                            height: 7,
                            color: "yellow",
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid container alignItems="center" gap={2}>
                      <Grid item xs={2}>
                        <p>Average</p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress
                          variant="determinate"
                          value={3}
                          color="warning"
                          sx={{
                            bgcolor: "#d0d0d0",
                            borderRadius: 4,
                            height: 7,
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid container alignItems="center" gap={2}>
                      <Grid item xs={2}>
                        <p>Poor</p>
                      </Grid>
                      <Grid item xs={7}>
                        <LinearProgress
                          variant="determinate"
                          value={2}
                          color="error"
                          sx={{
                            bgcolor: "#d0d0d0",
                            borderRadius: 4,
                            height: 7,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </div>
          </section> */}
      </div>
    </div>
  );
}
// }

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById({ _id: id });
  const categoryId = product.category;
  // console.log(typeof categoryId)
  const category = await Category.findById({ _id: categoryId });
  // console.log(category.name)

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      category: JSON.parse(JSON.stringify(category)),
    },
  };
}
