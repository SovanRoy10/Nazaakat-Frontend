import InstaVideos from "./InstaVideos";
import TextGenerateEffect from "./ui/text-generate";

export default function Hero(props) {
  return (
    <div className="flex justify-evenly px-10 overflow-hidden">
      <div className="mt-10 md:mt-16 md:w-1/2 max-w-[800px] w-full">
        <p className="md:text-[70px] font-extrabold tracking-tighter text-[40px]">
          Discover Elegance: <span className="textBackground">Nazaakat</span> -
          Your Exquisite <span className="textBackground">Jewelry </span>
          Destination
        </p>
        <div className="text-2xl mt-5 text-gray-500">
        <TextGenerateEffect
          words={
            "सुंदरता का स्वाद, नजाकत के साथ, हर पल यादगार मोमेंट्स बनाता है"
          }
        />
        </div>
      </div>

      <div className="hidden md:block">
        <InstaVideos product={props.product} />
      </div>
    </div>
  );
}
