import InstaVideos from "./InstaVideos";

export default function Hero() {
  return (
    <div className="flex justify-evenly px-10 overflow-hidden">
      <div className="mt-10 md:mt-16 md:w-1/2 max-w-[800px] w-full">
        <p className="md:text-[70px] font-extrabold tracking-tighter text-[43px]">
          Discover Elegance: <span className="textBackground">Nazaakat</span> -
          Your Exquisite <span className="textBackground">Jewelry </span>
          Destination
        </p>
        <p className="text-2xl mt-5 text-gray-500">
          सुंदरता का स्वाद, नजाकत के साथ, हर पल यादगार मोमेंट्स बनाता है
        </p>
      </div>

      <div className="hidden md:block">
        <InstaVideos />
      </div>
    </div>
  );
}
