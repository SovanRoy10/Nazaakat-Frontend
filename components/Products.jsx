import Product from "./Product";
import Loader from "./Loader";
import Link from "next/link";
import { useState } from "react";

export default function Products({ products }) {
  if (products) {
    // console.log(products)
    return (
      <div className="flex flex-col justify-center items-center mt-20 overflow-hidden">
        <div className="footerImage flex  items-center justify-between gap-1">
          <img
            src="https://iili.io/J2NU3S1.png"
            alt="leftFooter"
            className="lg:w-48  drop-shadow-lg w-24"
          />
          <h1 className="transparentHeading  md:text-5xl hover:text-[#212121] drop-shadow-lg text-[30px]">
            Our Best Sellers
          </h1>
          <img
            src="https://iili.io/J2NUoVR.png"
            alt=""
            className="lg:w-48  drop-shadow-lg w-24"
          />
        </div>

        <div className="grid md:grid-cols-3 md:grid-rows-2 p-10 ">
          {products.map((product, index) => {
            return (
              <Product
                key={index}
                title={product.title}
                price={product.price}
                description={product.description}
                images={product.images[0]}
                prevPrice={product.price}
                rating={4}
                id={product._id}
                offer={product.offer}
                category={product.category}
                width={96}
                height={96}
              />
            );
          })}
        </div>

        <div className="flex justify-between gap-20">
          <button>
            <Link
              href="/allproducts"
              className="relative inline-block text-lg group"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative"> View All </span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
          </button>
        </div>
      </div>
    );
  }
}
