export default function HeadingText(props) {
  return (
    <div className="flex items-baseline justify-between  pb-6 my-10">
      <div className="footerImage flex  items-center justify-between gap-1 mx-auto">
        <img
          src="https://iili.io/J2NU3S1.png"
          alt="leftFooter"
          className={`lg:w-48  drop-shadow-lg w-${props.width}`}
        />
        <h1 className="transparentHeading  md:text-5xl hover:text-[#212121] drop-shadow-lg text-[30px]">
          {props.text}
        </h1>
        <img
          src="https://iili.io/J2NUoVR.png"
          alt=""
          className={`lg:w-48  drop-shadow-lg w-${props.width}`}
        />
      </div>
    </div>
  );
}
