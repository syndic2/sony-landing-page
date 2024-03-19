import { useState, useCallback } from 'react';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperInstance } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { TestimonialItemProps, TestimonialItem } from './TestimonialItem';

const testimonies: TestimonialItemProps[] = [
  {
    profileImg: 'assets/racketagency_logo.jpeg',
    rate: 5,
    author: 'Racket Agency (Australia)',
    testimony: 'Wicaksono is very easy to work with. He has excellent communication and copywriting skills and delivers high-quality output on time. He is very proactive in providing updates, and I look forward to working with him on future projects.'
  },
  {
    profileImg: 'assets/lan-logo.png',
    rate: 5,
    author: 'Latestanimenews (Austria)',
    testimony: 'Sony had been an excellent writer who consistently produced fresh and engaging articles for our website. With his care and experience, we were actively helped to expand LAN’s brand and content variations.'
  },
  {
    profileImg: 'https://placehold.co/400',
    rate: 5,
    author: 'Dummy 1',
    testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti architecto harum natus aliquid nostrum ad asperiores sequi, eligendi sint assumenda eum illo similique repellendus.'
  },
  {
    profileImg: 'https://placehold.co/400',
    rate: 5,
    author: 'Dummy 2',
    testimony: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum deleniti architecto harum natus aliquid nostrum ad asperiores sequi, eligendi sint assumenda eum illo similique repellendus.'
  }
];

const Testimonial = () => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

  const onSwiperPrev = useCallback(() => {
    if (swiper) swiper.slidePrev();
  }, [swiper]);

  const onSwiperNext = useCallback(() => {
    if (swiper) swiper.slideNext();
  }, [swiper]);

  return (
    <section>
      <div className='bg-[#dfeaff] p-48'>
        <h2 className='text-4xl font-medium text-center'>Testimonies</h2>
        <div className='relative mt-16'>
          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={(swiper) => setSwiper(swiper)}
            initialSlide={1}
            slidesPerView={3}
            spaceBetween={50}
            loop={true}
            centeredSlides={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            className='px-12'
          >
            {testimonies.map((item, index) => {
              return (
                <SwiperSlide
                  key={`testimonial_item_${index + 1}`}
                  className='relative py-10'
                >
                  <TestimonialItem
                    profileImg={item.profileImg}
                    rate={item.rate}
                    author={item.author}
                    testimony={item.testimony}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <FaChevronLeft
            size={24}
            className='absolute top-1/2 left-0 z-[2] first-letter:text-[#024f9a] cursor-pointer'
            onClick={onSwiperPrev}
          />
          <FaChevronRight
            size={24}
            className='absolute top-1/2 right-0 z-[2] text-[#024f9a] cursor-pointer'
            onClick={onSwiperNext}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;