import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import InstaVideo from "./InstaVideo";

export default function InstaVideos() {
  return (
    <div className="container mt-16 drop-shadow-lg   hover:scale-105 duration-200">
      <div className="relative  border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[520px] w-[350px] shadow-xl">
        <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-50"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-[325px] h-[495px]  bg-white dark:bg-gray-800 ">
          <Swiper
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper z-0"
          >
            <SwiperSlide>
              <InstaVideo url="https://www.instagram.com/reel/CxcDF_UPMrk/?igshid=MTc4MmM1YmI2Ng==" />
            </SwiperSlide>
            <SwiperSlide>
              <InstaVideo url="https://www.instagram.com/reel/CwXZ4h0sStp/?igshid=NmQ4MjZlMjE5YQ==" />
            </SwiperSlide>
            <SwiperSlide>
              <InstaVideo url="https://www.instagram.com/reel/CxaooVgvUkb/?igshid=NmQ4MjZlMjE5YQ==" />
            </SwiperSlide>
            <SwiperSlide>
              <InstaVideo url="https://www.instagram.com/reel/CweYV56NlCe/?igshid=NmQ4MjZlMjE5YQ==" />
            </SwiperSlide>
            <SwiperSlide>
              <InstaVideo url="https://www.instagram.com/reel/CxHrprgPTsv/?igshid=NmQ4MjZlMjE5YQ==" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
