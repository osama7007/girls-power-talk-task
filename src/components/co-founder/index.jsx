import rachita from "../../images/rachita.jpg"
import sameer from "../../images/Sameer-S.-Somal-Crop.jpg"
import somalRachita from "../../images/Sameer-and-Rachita.webp"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const Cofounders = () => {
  return (
    <AnimationOnScroll animateIn='animate__zoomIn' animateOnce ={true} >
    <div id="cofounders" className="flex gap-5 flex-wrap justify-center bg-gray-100 dark:bg-dim-gray py-5">
        <div className="flex flex-col gap-2 overlay hover:-translate-y-5 hover:scale-105 hover:shadow-lg hover:shadow-gray-500 transition duration-300 " >
        <img src={rachita} alt="rachita" className="w-[300px] h-[300px]"/>
        <span className="text-gray-500 dark:text-gray-200 font-bold" >Rachita Sharma</span>
        </div>
    <div className="flex flex-col gap-2 overlay hover:-translate-y-5 hover:scale-105 hover:shadow-lg hover:shadow-gray-500  transition duration-300 " >
        <img src={somalRachita} alt="somal&Rachita"className="w-[300px] h-[300px] " />
        <span className="text-gray-500 dark:text-gray-200 font-bold" >Rachita and sameer</span>
    </div>
    <div className="flex flex-col gap-2 overlay hover:-translate-y-5 hover:scale-105 hover:shadow-lg hover:shadow-gray-500  transition duration-300 " >
        <img src={sameer} alt="sameer" className="w-[300px] h-[300px] "/>
        <span className="text-gray-500 dark:text-gray-200 font-bold" >Sameer somal</span>
    </div>
    </div>
    </AnimationOnScroll>
  )
}

export default Cofounders