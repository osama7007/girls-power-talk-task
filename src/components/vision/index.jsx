import { FaQuoteLeft ,FaQuoteRight } from 'react-icons/fa';
import equality from "../../images/equality.gif";
import diversity from "../../images/diversity.gif";
import freedom from "../../images/freedom.gif";
import VisionCard from '../vision card';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const Vision = () => {
  return (
    <AnimationOnScroll animateIn='animate__zoomIn' animateOnce ={true}>
    <div className='p-5' >
       <div className='flex lg:w-1/2 w-full mx-auto lg:p-7 p-1 bg-gray-100 dark:bg-gray-900 dark:text-white shadow-dim-gray rounded-md mb-10'>
        <FaQuoteLeft/>
        <p className='text-xl lg:w-[90%] w-full m-2' >
        Our vision was not restricted to offering young people jobs, but went further in ways that would make the company a truly empowering and equitable place. Girl Power Talk’s business model is founded on four pillars:  <span className='font-bold' > women in technology, diversity and inclusion, impact generation and an entrepreneurial culture.</span>
        </p>
        <FaQuoteRight/>
       </div>
      <div className='flex flex-wrap gap-2 justify-center' >
        <VisionCard title={"Equality"} image={equality}/>
        <VisionCard title={"Diversity"} image={diversity}/>
        <VisionCard title={"Freedom"} image={freedom}/>
       </div>
    </div>
</AnimationOnScroll>
  )
}

export default Vision