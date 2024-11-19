import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const MusicPlayer = () => {
    return (
        <div className="flex p-2 gap-x-3">

            <div className="w-16 h-16 rounded-md bg-gray-600">
                <img src="https://i.ytimg.com/vi/CHXzLUzzW5c/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCs9Kc-aQSKy_eC3533nits3QgNYQ" alt="" className='h-full object-cover'/>
            </div>
            
            <div className='flex flex-col justify-center text-white w-1/3 max-h-16 overflow-hidden'>
                <h2 className="text-lg font-bold truncate">BLESSD - YOGURCITO 💜</h2>
                <p className="text-sm truncate">BLESSD EL BENDITO 💙</p>
            </div>
            
            <div className="flex justify-center items-center gap-x-1">
                <button className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                    ◀ {/* Ícono para "Anterior" */}
                </button>
                <button className="text-white bg-red-500 p-2 rounded-full hover:bg-red-400">
                    ▶ {/* Ícono para "Play" */}
                </button>
                <button className="text-white bg-gray-700 p-2 rounded-full hover:bg-gray-600">
                    ▶ {/* Ícono para "Siguiente" */}
                </button>
            </div>  

        </div>
    )
}

export default MusicPlayer;