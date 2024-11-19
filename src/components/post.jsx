import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const PostTemplate = () => {

    const [like, setLike] = useState(false)

    return (
        <div className="bg-[#1A1D1F] rounded-lg h-100 mb-5 shadow-xl shadow-black">
            <div className="flex items-center gap-3 p-4">
                <img src="https://i.imgur.com/SgHa6l8.png" alt="" className="h-10 w-10 rounded-full" />
                <a href="/" className="text-sm focus:outline-none lexend-light text-white">Juan David Serna</a>
            </div>
            <div className="flex w-full max-h-screen justify-center bg-gray-600">
                <img className="object-fit cursor-pointer" src="https://i.imgur.com/SgHa6l8.png" alt="" />
            </div>
            <div className="flex justify-around w-1/5 px-4 py-5 gap-x-3 cursor-pointer text-xl text-white">
                <span
                    onClick={() => setLike(!like)}
                    className={`transition-all duration-300 hover:text-red-600 ${like ? 'text-red-600 scale-110' : ''}`}>
                    <FontAwesomeIcon icon={faHeart} />
                </span>
                <span className="transition-colors duration-300 hover:text-blue-300">
                    <FontAwesomeIcon icon={faComment} />
                </span>
                <span className="transition-colors duration-300 hover:text-gray-500">
                    <FontAwesomeIcon icon={faShare} />
                </span>
            </div>
            <div className="p-4">
                comments
            </div>
        </div>
    )
}

export default PostTemplate;