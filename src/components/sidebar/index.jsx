import { useState } from 'react';
import { RiMenuFoldLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import style from "./sidebar.css";
import { HashLink } from 'react-router-hash-link';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';

const Sidebar = () => {
     const [icon, setIcon] = useState(false)
    const addClass=()=>{
        setIcon(!icon)
        document.querySelector(".icon").classList.toggle("menu");
    }
    const [dark, setIsDark] = useState(true);
    const setDark =()=>{
        setIsDark(!dark)
        document.querySelector('html').classList.toggle('dark')
    }
  return (
    <div className={`${style.menu} transition duration-500 icon block lg:hidden w-1/4 h-screen text-white p-4 fixed top-0 right-0 z-50`} >
           {
               !icon ? <RiMenuFoldLine className='sidebar hover:text-dim-gray transition text-dim-red' onClick={()=>addClass()}/>
                 : <AiOutlineClose className='sidebar  hover:text-dim-red transition text-white' onClick={()=>addClass()}/>
        } 
        {
                icon && 
                <ul className="flex flex-col gap-5 dc translate-y-[50%] lg:hidden" >
                    <li className='link_hover font-bold ' ><HashLink to='#services'>Services</HashLink></li>
                    <li className='link_hover font-bold ' ><HashLink to='#activities'>Activities</HashLink></li>
                    <li className='link_hover font-bold ' ><HashLink to='#articles'>Articles</HashLink></li>
                    <li className='link_hover font-bold ' ><HashLink to='#cofounders'>Cofounders</HashLink></li>
                    <li className='link_hover font-bold ' ><HashLink to="#contact">Contact</HashLink></li>
                    <li>
                    <button onClick={()=>setDark()} className="link_hover text-white ">
                  { 
                        dark ? <BsFillSunFill/>
                        :<MdDarkMode/>
                   }
                    </button>
                    </li>
                </ul>
        }
        
    </div>
  )
}

export default Sidebar
