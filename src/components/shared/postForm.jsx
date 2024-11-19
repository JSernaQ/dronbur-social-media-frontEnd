import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PostForm = () => {
    return (
        <section className="bg-[#1A1D1F] rounded-lg h-100 mb-5 shadow-xl shadow-black flex flex-col justify-center gap-3 py-4 px-4">
            <form method="POST" className="flex flex-col items-end gap-3">
                <textarea name="description" placeholder="Comparte algo.." className="w-full h-20 p-2 px-3 rounded-lg bg-[#272B30]"></textarea>
                <button type="submit" class="cursor-pointer text-sm lexend-extralight flex items-center gap-2 px-3 py-2 bg-[#2A85FF] text-[#f1f1f1] rounded-lg transition shadow-md hover:bg-[#ffffff] hover:text-[#2A85FF]">
                        
                        <FontAwesomeIcon icon={faPlus} /> Publicar
                        {/* <div class="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-black bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
                            Download
                        </div> */}

                </button>
            </form>
        </section>
    )
}

export default PostForm;