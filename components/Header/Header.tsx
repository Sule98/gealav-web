import Image from 'next/image'
import React from 'react';
import { FaBars} from 'react-icons/fa';
import Menu from './Menu/Menu';


const Header = () => {
    return (
      <div className=' flex bg-white'>
        <div>
        <Image
      src="/logo.png"
      alt="Logo"
      width={200}
      height={250}
    />
    </div>
  <div className='flex pl-96'>
  <Menu/>
  </div>
     
    </div>
      
    );
  };
  
  export default Header;