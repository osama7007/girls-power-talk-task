
import paragraphs from "./testmonial_paragraphs";
import { FaQuoteLeft ,FaQuoteRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./swiperStyle.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const Testmonials = () => {
  return (

    <AnimationOnScroll animateIn='animate__zoomIn' animateOnce ={true}>
            <div className="bg-gray-100 dark:bg-dim-gray py-5" >
      <Swiper 
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{
         delay: 3000,
         disableOnInteraction: false,
       }}
        navigation={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
         { paragraphs.map(el=>{
            return(
            <SwiperSlide className="flex flex-col" >
                <img src={el.image} alt={'test'}/>
                <span className="text-gray-500" >{el.name}</span>
                <div className='flex justify-center lg:w-[90%] w-full mx-auto p-1'>
                <FaQuoteLeft/>
                <p className="w-[80%]">{el.paragraph}</p>
                <FaQuoteRight/>
                </div>
            </SwiperSlide>
            )})}
      </Swiper>
    </div>
    </AnimationOnScroll>
  )
}

export default Testmonials