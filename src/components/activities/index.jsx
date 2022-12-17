import React from 'react'
import africanWomen from "../../images/african women1.webp"
import africanWomen2 from "../../images/african women2.jpg"
import africanWomen3 from "../../images/african women3.jpg"
import africanWomen4 from "../../images/african women4.webp"
import ServiceCard from '../../services card'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const Activities = () => {
  return (
    <AnimationOnScroll animateIn='animate__backInUp'
    animateOnce ={true}>
    <div id='activities' className='flex flex-col justify-center items-center overflow-hidden py-5' >
        <h3 className='w-full lg:w-[70%] text-lg font-bold mb-5 dark:text-white' >Around the globe, young women are discovering new opportunities in STEM (science, technology, engineering and mathematics) fields through community training programs. However, the skills gap between men and women is still wide. African women’s lack of technical skills is undermining their capacity to achieve their economic potential and boost the prosperity of their communities. But though this reality is discouraging, both for African women and the continent’s—and eventually the world’s—economy, it can provide a promising new development opportunity for the region, provided the right steps are taken by leaders and the public alike.</h3>
        <div className='flex flex-wrap items-center justify-evenly mb-5' >
            <ServiceCard  image={africanWomen}/>
            <ServiceCard  image={africanWomen2}/>
            <ServiceCard  image={africanWomen3}/>
            <ServiceCard  image={africanWomen4}/>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/XWammcOjnbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</AnimationOnScroll>
  )
}

export default Activities