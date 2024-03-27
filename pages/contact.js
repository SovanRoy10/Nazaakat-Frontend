import { useEffect } from "react";
// import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import HeadingText from "@/components/HeadingText";
import gsap from "gsap";
import Power3 from "gsap";

function ArrowOutwardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );
}

export default function Contact() {
  useEffect(() => {
    document.querySelectorAll(".elem").forEach(function (elem) {
      var rotate = 0;
      var diffrot = 0;

      elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
          opacity: 0,
          ease: Power3,
          duration: 0.5,
        });
      });

      elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
          opacity: 1,
          ease: Power3,
          top: diff,
          left: dets.clientX,
          rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
        });
      });
    });
  }, []);

  return (
    <div className="flex flex-col">
      <div id="main" className="bg-black">
        <div id="second">
          <div className="elem">
            <img src="https://iili.io/J3Cp4ne.jpg" alt="" />
            <h1>Instagram</h1>
            <ArrowOutwardIcon />
          </div>
          <div className="elem">
            <img src="https://iili.io/J3CpzvV.jpg" alt="" />
            <h1>Whatsapp</h1>
            <ArrowOutwardIcon />
          </div>
          <div className={`elem elemlast`}>
            <img
              src="https://images.pexels.com/photos/12737493/pexels-photo-12737493.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
            />
            <h1>Facebook</h1>
            <ArrowOutwardIcon />
          </div>
        </div>
      </div>

      <div className="mx-auto my-10 address flex flex-col items-center">
        <HeadingText text="Our Address" width="20" />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.871566587419!2d88.4002843!3d22.5839064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275d5802bfbcf%3A0x662f5639dc18fb1a!2sPaying%20Guest%20SaltLake%20%2F%20Rooms%20for%20Rent%20Salt%20Lake!5e0!3m2!1sen!2sin!4v1696931519383!5m2!1sen!2sin"
          style={{ width: "100vw", height: "80vh" }} // Set width to 100% of viewport width and height to 80% of viewport height
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg"
        ></iframe>
      </div>

      <section className="text-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <HeadingText text="Contact us" width="20" />
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium "
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm  border   text-sm rounded-lg  block w-full p-2.5"
                placeholder="example@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm  rounded-lg border border-gray-300 shadow-sm"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm  rounded-lg shadow-sm border border-gray-300 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <a href="#_" className="relative inline-block text-lg group ">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Submit</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </a>
          </form>
        </div>
      </section>
    </div>
  );
}
