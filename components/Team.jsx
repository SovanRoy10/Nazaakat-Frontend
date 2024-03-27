
import { Swiper, SwiperSlide } from 'swiper/react';
import Member from './Member.jsx'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HeadingText from './HeadingText.jsx'

export default function Team() {
  return (
    <div className='my-10'>
      <HeadingText text='Our Team' width="28"/>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}


        modules={[Autoplay, Pagination, Navigation]}
        className="mySwipe"
      >
        <SwiperSlide>

          <div className='flex justify-evenly'>
            <Member
              img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSRWNus2-aQYL7F_061NAk47gu5rQzMNAykTYbQ6DNxqF9HZ5A2mFyvGYEcPAWVqRf-c&usqp=CAU'
              name='Leo Messi'
              position='Ceo / co-founder'
            />

            <Member
              img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSRWNus2-aQYL7F_061NAk47gu5rQzMNAykTYbQ6DNxqF9HZ5A2mFyvGYEcPAWVqRf-c&usqp=CAU'
              name='Leo Messi'
              position='Ceo / co-founder'
            />

            <Member
              img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSRWNus2-aQYL7F_061NAk47gu5rQzMNAykTYbQ6DNxqF9HZ5A2mFyvGYEcPAWVqRf-c&usqp=CAU'
              name='Leo Messi'
              position='Ceo / co-founder'
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>

          <div className='flex justify-evenly'>
            <Member
              img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSRWNus2-aQYL7F_061NAk47gu5rQzMNAykTYbQ6DNxqF9HZ5A2mFyvGYEcPAWVqRf-c&usqp=CAU'
              name='Leo Messi'
              position='Ceo / co-founder'
            />

            <Member
              img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSRWNus2-aQYL7F_061NAk47gu5rQzMNAykTYbQ6DNxqF9HZ5A2mFyvGYEcPAWVqRf-c&usqp=CAU'
              name='Leo Messi'
              position='Ceo / co-founder'
            />

            <Member
              img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSRWNus2-aQYL7F_061NAk47gu5rQzMNAykTYbQ6DNxqF9HZ5A2mFyvGYEcPAWVqRf-c&usqp=CAU'
              name='Leo Messi'
              position='Ceo / co-founder'
            />
          </div>
        </SwiperSlide>
      

      </Swiper>
    </div>
  );
}
