const Underline = ({title , bgColor}) => {
  return (
    <div className={`${bgColor} dark:bg-black`} >
        <h3 className= 'mx-auto pt-5 w-1/6 font-bold text-4xl  dark:text-white' >{title}</h3>
        <span className='inline-block mx-auto  lg:w-1/12 w-1/4 h-1 lg:bg-dim-red mb-5'></span>
    </div>
  )
}
export default Underline 