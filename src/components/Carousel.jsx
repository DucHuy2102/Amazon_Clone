import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Carousel = () => {
    return (
        <div className='h-[600px] bg-white'>
            <Swiper
                loop={true}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation, Autoplay]}
                autoplay={{ delay: 4000 }}
                className='h-[50%]'
            >
                {/* slide 1 */}
                <SwiperSlide>
                    <img src={'../images/carousel_1.jpg'} alt='Carousel Image' />
                </SwiperSlide>
                {/* slide 2 */}
                <SwiperSlide>
                    <img src={'../images/carousel_2.jpg'} alt='Carousel Image' />
                </SwiperSlide>
                {/* slide 3 */}
                <SwiperSlide>
                    <img src={'../images/carousel_3.jpg'} alt='Carousel Image' />
                </SwiperSlide>

                {/* video */}
                <SwiperSlide className='bg-black'>
                    <video controls>
                        <source src={'../images/carousel_vid.mp4'} type='video/mp4' />
                    </video>
                </SwiperSlide>

                {/* slide 4 */}
                <SwiperSlide>
                    <img src={'../images/carousel_4.jpg'} alt='Carousel Image' />
                </SwiperSlide>
                {/* slide 5 */}
                <SwiperSlide>
                    <img src={'../images/carousel_5.jpg'} alt='Carousel Image' />
                </SwiperSlide>
            </Swiper>
            <div className='h-[50%] bg-gradient-to-b from-stone-900' />
        </div>
    );
};

export default Carousel;
