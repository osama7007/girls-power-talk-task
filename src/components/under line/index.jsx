const Underline = ({title , bgColor}) => {
  return (
    <div className={`${bgColor} dark:bg-black flex flex-col justify-center items-center`} >
        <h3 className= 'pt-5  font-bold text-4xl  dark:text-white' >{title}</h3>
        <span className='inline-block lg:w-1/12 w-1/4 h-1 mr-20 md:m-0 lg:bg-dim-red mb-5'></span>
    </div>
  )
}
export default Underline 