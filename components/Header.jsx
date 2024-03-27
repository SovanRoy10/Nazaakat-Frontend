import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import { useState } from "react";

// import Cookies from "js-cookie";

import { useSelector } from "react-redux";

export default function Header() {
  //   const [username, setUserName] = useState("");
  //   const [userImage, setUserImage] = useState("");
  //   useEffect(() => {
  //     const usernameCookie = Cookies.get("username");
  //     const userImageCookie = Cookies.get("userImage");

  //     if (usernameCookie && userImageCookie) {
  //       setUserName(usernameCookie);
  //       setUserImage(userImageCookie);
  //     }
  //   }, []);

  const cartItems = useSelector((state) => state.cart.cart);
  const { data: session } = useSession();
  const router = useRouter();
  const { pathname } = router;

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const active =
    "block py-2 pl-3 pr-4  hover:text-blue-600 md:p-0 text-blue-700";
  const inactive =
    "block py-2 pl-3 pr-4  hover:text-blue-600 md:p-0 text-white";

  return (
    <nav className="text-lg w-full z-20 top-0 left-0 border-b border-gray-200  sticky bg-gray-900 ">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="https://iili.io/JJV0UkN.jpg"
            className="h-9 md:h-12 mr-1 md:mr-3 rounded-full border-2 border-green-600 p-[1.3px]"
            alt="logo"
            width={47}
            height={36}
          />
          <span className="self-center text-sm md:text-2xl font-semibold whitespace-nowrap textBackground">
            Nazaakat
          </span>
        </Link>

        <div className="flex md:order-2 items-center gap-5">
          {session ? (
            <span className="text-white flex gap-2 items-center text-sm md:text-base">
              <Image
                src={session.user.image}
                alt=""
                className="w-7 md:w-8 rounded-full"
                width={40}
                height={40}
              />
              {session.user.name}
            </span>
          ) : (
            // <Link href="/login">
            <button
              type="button"
              className="text-sm text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg hover:underline underline-offset-4 px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => signIn("google")}
            >
              <span>Login</span>
            </button>
            // </Link>
          )}
          <button
            onClick={toggleMobileNav}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="flex gap-5 items-center panel">
            <Link href="/cart" className={`flex gap-3`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 ${
                  pathname === "/cart" ? "text-blue-500" : "text-white"
                }`}
              >
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
              </svg>

              <span className="text-black text-xs bg-[#c5ce9c] px-2 py-1 rounded-full">
                {cartItems.length}
              </span>
            </Link>
          </div>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex  mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 ">
            <li>
              <Link href="/" className={pathname === "/" ? active : inactive}>
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/allproducts"
                className={pathname === "/allproducts" ? active : inactive}
              >
                All Products
              </Link>
            </li>
            {/* <li>
              <Link
               href="/account/order"
                className={({ isActive }) =>
                  `block py-2 pl-3 pr-4  hover:text-blue-600 md:p-0  ${
                    isActive ? "text-blue-700" : "text-white"
                  }`
                }
              >
                Orders
              </Link>
            </li> */}

            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? active : inactive}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className={pathname === "/contact" ? active : inactive}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile navigation links */}
        {isMobileNavOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-gray-900  rounded shadow-lg pl-6 pr-14 py-7 text-lg">
            <ul className="flex flex-col items-start gap-4">
              <li>
                <Link
                  onClick={toggleMobileNav}
                  className={pathname === "/" ? active : inactive}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMobileNav}
                  className={pathname === "/allproducts" ? active : inactive}
                  href="/allproducts"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  onClick={toggleMobileNav}
                  className={pathname === "/about" ? active : inactive}
                  href="/about"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  onClick={toggleMobileNav}
                  className={pathname === "/contact" ? active : inactive}
                  href="/contact"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
