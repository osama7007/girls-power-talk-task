const VisionCard = ({title,image}) => {
  return (
    <div className='lg:w-1/4 w-1/2 hover:animate-pulse dark:text-white' >
        <div>
        <h3 className=' text-xl font-bold w-1/2 mx-auto' >{title}</h3>
        <div className='overlay'>
        <img src={image} alt="equality"/> 
        </div>
        </div>
    </div>
  )
}

export default VisionCard