import Image from "next/image";

export default function InstaVideo(props) {
 
    return (
      <div>
        <Image
          src={props.imageUrl}
          alt="Hero Images"
          priority
          // width={400}
          // height={400}
          fill
        />
      </div>
    );
  }

