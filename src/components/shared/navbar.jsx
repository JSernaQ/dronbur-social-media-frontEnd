import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (

        <nav className="flex flex-col justify-center p-3 py-10 w-full h-14 bg-[#1A1D1F] shadow-sm shadow-black z-30">
            <div className="flex flex-row">

                <div className="flex flex-row w-full justify-end pl-4">

                    <input
                        className="bg-[#272B30] text-gray-400 w-2/3 rounded-xl py-2 px-4 focus:outline-none focus:border-none"
                        type="text"
                        name="search"
                        id="search"
                        placeholder="Buscar..."
                    />

                </div>
                <div className="flex flex-row w-full justify-end items-center gap-3 pr-3">

              
                    <button class="cursor-pointer lexend-extralight flex items-center gap-2 px-6 py-2 bg-[#2A85FF] text-[#f1f1f1] rounded-lg transition shadow-md hover:bg-[#ffffff] hover:text-[#2A85FF]">
                        
                        <FontAwesomeIcon icon={faPlus} />Subir

                        {/* <div class="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                            Download
                        </div> */}

                    </button>

                    <ul className="text-white text-lg">
                        <li className="py-2 w-full px-4 rounded-xl hover:bg-gray-400 gap-4 hover:text-black transition-colors duration-150">
                            <FontAwesomeIcon icon={faMessage} />
                        </li>
                    </ul>


                    <ul className="text-white text-lg">
                        <li className="py-2 w-full px-4 rounded-xl hover:bg-gray-400 gap-4 hover:text-black transition-colors duration-150">
                            <FontAwesomeIcon icon={faBell} />
                        </li>
                    </ul>

                    <ul className="text-white text-lg">
                        
                    </ul>

                </div>

            </div>
        </nav>

    )
}

export default Navbar;