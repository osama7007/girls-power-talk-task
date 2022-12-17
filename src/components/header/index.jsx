import Navbar from "../navbar";
import "./header.css";
const Header = () => {  
  return (
     <div id="header" className={` w-full h-[720px] flex justidy-center items-center`}>
      <Navbar />
      {/* hero content */}
      <div className="w-full container mx-auto flex flex-col md:p-10">
        <p className="font-bold p-1 text-white w-[450px] lg:self-start lg:w-[90%] z-10" >
          " An individual has not started living until he can rise above the
          narrow confines of his individualistic concerns to the broader
        concerns of all humanity "
        </p>
        <span className="text-gray-500 lg:self-start ml-20 z-40" >Martin Luther King</span>
      </div>
      <div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
    </div>
  );
};

export default Header;
