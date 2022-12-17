import articles from "./articles";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";
const Articles = () => {
  return (
    <AnimationOnScroll animateIn='animate__zoomIn' animateOnce ={true}>
    <div id='articles' className="py-5  lg:px-20 px-10 flex justify-center gap-3 flex-wrap">
      {
        articles.map(article=>{
          return(
              <div className="bg-gray-100 dark:bg-gray-900 p-2 lg:w-1/4 w-full md:w-1/3 leading-7 " >
                <h2 className="font-bold text-xl dark:text-white">{article.header}</h2>
                <p className="text-gray-700 dark:text-white text-center" >
                  {article.text} 
                  <a target="_blank" href={article.link} className="text-blue-500 text-sm ml-5" rel="noreferrer" >Read the article...</a>
                </p>
              </div>            
            )
          })
        }
    </div>
    </AnimationOnScroll>
  )
}

export default Articles