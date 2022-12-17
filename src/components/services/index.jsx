import ServiceCard from "../../services card";
import youth from "../../images/youth.jpg";
import leader from "../../images/leadership.jpg";
import charity from "../../images/help.jpg";
import consult from "../../images/consulting.jpg";
import intern from "../../images/training.jpg";
import digital from "../../images/marketing.jpg";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const Services = () => {
  return (
    <AnimationOnScroll animateIn='animate__zoomIn'
    animateOnce ={true}>
    <div id="services" className="bg-gray-100 dark:bg-dim-gray p-5 flex flex-wrap gap-2 justify-center items-center" >
        <ServiceCard title={"Youth Empowering"} image={youth} bgColor="bg-gray-200"/>
        <ServiceCard title={"Leadership Training"} image={leader} bgColor="bg-gray-200"/>
        <ServiceCard title={"Internships"} image={intern} bgColor="bg-gray-200"/>
        <ServiceCard title={"Charitable Initiatives"} image={charity} bgColor="bg-gray-200"/>
        <ServiceCard title={"Digital Markiting"} image={digital} bgColor="bg-gray-200"/>
        <ServiceCard title={"Buisness Consultation"} image={consult} bgColor="bg-gray-200"/>
    </div>
  </AnimationOnScroll>
  )
}

export default Services