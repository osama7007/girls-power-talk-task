
import logo from "../../images/logo.png";
import {HashLink} from 'react-router-hash-link';
import Sidebar from "../sidebar";
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { useState } from "react";
const Navbar = () => {
    const [dark, setIsDark] = useState(true);
    const setDark =()=>{
        setIsDark(!dark)
        document.querySelector('html').classList.toggle('dark')
    }
     return (
    <div>
        <nav className="fixed top-0 flex justify-between items-center p-6 bg-gray-900 opacity-90 z-50" >
            <div className="w-1/5 h-1/5 cursor-pointer">
                <HashLink to='#header'><img src={logo} alt="logo" className="w-full"/></HashLink>
            </div>
            <div className="pr-10 hidden lg:block">
                <ul className="flex gap-5" >
                    <li className='navLink'><HashLink to='#services' >Services</HashLink></li>
                    <li className='navLink'><HashLink to='#activities' >Activities</HashLink></li>
                    <li className='navLink'><HashLink to='#articles' >Articles</HashLink></li>
                    <li className='navLink'><HashLink to='#cofounders' >Cofounders</HashLink></li>
                    <li className='navLink'><HashLink to="#contact" >Contact</HashLink></li>
                   <li>
                   <button onClick={()=>setDark()} className="link_hover text-white">
                  { 
                        dark ? <BsFillSunFill/>
                        :<MdDarkMode/>
                   }
                    </button>

                    </li>
                </ul>
            </div>
        </nav>
            <Sidebar/>
    </div>
  )
}

export default Navbar