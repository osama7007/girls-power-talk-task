const ServiceCard = ({title , image , bgColor}) => {
  return (
    <div className={`${bgColor} p-2 lg:w-1/4 w-1/2 h-80 flex gap-5 flex-col text-center items-center dark:bg-gray-900`} >
        <h3 className="text-xl font-bold mx-auto dark:text-white " >{title}</h3>
        <div className="overlay hover:-translate-y-3 hover:scale-105 hover:shadow-lg hover:shadow-gray-500  transition duration-300" >
        <img src={image} alt="descripe" className="w-[300px] h-[200px]" />
        </div>
    </div>
  )
}
export default ServiceCard