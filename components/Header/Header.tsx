import Image from 'next/image'


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
  
      <nav className=' ml-96'>
      <ul className='flex  text-center p-2' >
        <li className='m-3  flex text-secondary hover:text-text font-bold '><a href="#home">Inicio</a></li>
        <li className='m-3  flex text-secondary hover:text-text font-bold '><a href="#news">Noticias</a></li>
        <li className='m-3 flex text-secondary hover:text-text font-bold ' ><a href="#contact">Contacto</a></li>
        <li className='m-3 flex text-secondary hover:text-text font-bold  '><a href="#about">Acerca de</a></li>
        <li className='m-3 flex text-secondary hover:text-text font-bold  '><a href="#negocio">Oportunidades de Negocio</a></li>
        <li className='m-3 flex text-secondary hover:text-text font-bold  '><a href="#menu">MENÚ</a></li>
      </ul>
      </nav>
    </div>
      
    );
  };
  
  export default Header;