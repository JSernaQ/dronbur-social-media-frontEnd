import React from 'react';
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faX, faBars, faUser, faUserGroup, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (

    <nav className={`z-50 flex flex-col justify-between shadow-black shadow-lg h-screen duration-300 dark:bg-[#1A1D1F] ${isNavOpen ? 'md:w-1/4 lg:w-1/5 w-screen' : 'lg:w-1/12'}`}>
      <div>

        <button className='flex justify-center items-center w-full pt-5 text-xl text-white focus:outline-none' onClick={() => { setIsNavOpen(!isNavOpen) }}>
          <span className='hover:bg-gray-400 px-2 hover:text-black transition-colors duration-300 rounded-md'>
            <FontAwesomeIcon icon={isNavOpen ? faX : faBars} />
          </span>
        </button>

        <div className='flex flex-row justify-center items-center gap-8 py-6'>

          <a href="/" className={`text-2xl lexend-bold text-white transition-all ease-in-out duration-500 ${isNavOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            DRONBUR
          </a>
        </div>


        <ul className='flex flex-col dark:text-white justify-center items-center px-3 transition-all ease-in-out duration-500 gap-4 '>

          <li className={`flex flex-row justify-center items-center py-2 w-full px-4 rounded-xl hover:bg-gray-400 gap-4 hover:text-black ${isNavOpen ? '' : 'justify-center'}`}>
            <span className='text-lg'>
              <FontAwesomeIcon icon={faHouse} />
            </span>
            <span className={`${isNavOpen ? '' : 'hidden '} lexend-extralight`}>
              Inicio
            </span>
          </li>

          <li className={`flex flex-row justify-center items-center py-2 w-full px-4 rounded-xl hover:bg-gray-400 gap-4 hover:text-black ${isNavOpen ? '' : 'justify-center'}`}>
            <span className='text-lg'>
              <FontAwesomeIcon icon={faUserGroup} />
            </span>
            <span className={`${isNavOpen ? '' : 'hidden '} lexend-extralight`}>
              Amigos
            </span>
          </li>

          <li className={`flex flex-row justify-center items-center py-2 w-full px-4 rounded-xl hover:bg-gray-400 gap-4 hover:text-black ${isNavOpen ? '' : 'justify-center'}`}>
            <span className='text-lg'>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className={`${isNavOpen ? '' : 'hidden '} lexend-extralight`}>
              Perfil
            </span>
          </li>

        </ul>

      </div>

      <div className='flex flex-col justify-end items-center py-3 pb-5 w-full h-full '>
        <hr />
        <footer className='lexend-extralight text-white'>
          Dronbur®
        </footer>
      </div>
    </nav>

  );
};

export default Sidebar;
