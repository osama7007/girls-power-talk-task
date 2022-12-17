import { ImFacebook , ImLinkedin2 } from 'react-icons/im';
import { GrInstagram  } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { FaInternetExplorer } from 'react-icons/fa';
import logo from "../../images/logo.png";
import { HashLink } from 'react-router-hash-link';

const Contacts = () => {
  return (
    <div id='contact' className='bg-dim-gray dark:bg-black text-white py-20 flex md:flex-row flex-col  md:justify-evenly md:items-center j justify-between items-center gap-10'>
      {/* logo */}
      <div className="w-full md:w-1/4 h-1/5 cursor-pointer">
                <HashLink to='#header'><img src={logo} alt="logo" className="w-full"/></HashLink>
            </div>
      {/* contacts */}
      <ul className='flex md:flex-col flex-wrap gap-4 justify-center' >
        <li className='flex gap-3 items-center navLink' ><ImFacebook/><a href="https://www.facebook.com/girlpowertalk/" rel="noreferrer"><span>Facebook</span></a> </li>
        <li className='flex gap-3 items-center navLink' ><GrInstagram/><a href="https://www.instagram.com/girlpowertalk/" rel="noreferrer"><span>Instagram</span></a> </li>
        <li className='flex gap-3 items-center navLink' ><ImLinkedin2/><a href="https://www.linkedin.com/company/girl-power-talk" rel="noreferrer"><span>Linkedin</span></a> </li>
        <li className='flex gap-3 items-center navLink cursor-default' ><AiOutlineMail/> <span>info@girlpowertalk.com</span></li>
        <li className='flex gap-3 items-center navLink cursor-pointer ' ><FaInternetExplorer/><a href="https://girlpowertalk.com/"><span>Ofiicial Website</span></a></li>
      </ul>
      {/* links */}

      <ul className='flex md:flex-col flex-wrap gap-4 justify-center' >
          <li className='navLink'><HashLink to='#services' >Services</HashLink></li>
          <li className='navLink'><HashLink to='#activities' >Activities</HashLink></li>
          <li className='navLink'><HashLink to='#articles' >Articles</HashLink></li>
          <li className='navLink'><HashLink to='#cofounders' >Cofounders</HashLink></li>
          <li className='navLink'><HashLink to="#contact" >Contact</HashLink></li>
      </ul>

    </div>
  )
}

export default Contacts