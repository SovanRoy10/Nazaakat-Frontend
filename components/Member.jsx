
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Member(props) {
  return (
    <div className="hover:scale-95 duration-200 flex flex-col drop-shadow-lg md:text-base text-xs  w-1/4 p-10 border-2 rounded-lg border-gray-300 space-y-2 cursor-pointer items-center">
      <img
        src={props.img}
        alt="member"
        className="rounded-lg object-cover md:block hidden"
      />
      <h1>{props.name}</h1>
      <p className="uppercase">{props.position}</p>
      <div className="flex justify-between px-10">
        <InstagramIcon className="text-pink-800" />
        <LinkedInIcon className="text-blue-800" />
        <FacebookIcon className="text-blue-600" />
      </div>
    </div>
  );
}
