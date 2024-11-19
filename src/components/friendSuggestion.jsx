import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const FriendSuggestion = () => {
    return (
        <section className="flex items-center justify-between w-full h-auto rounded-md p-3 ">

            <img src="https://i.imgur.com/SgHa6l8.png" alt="" className="rounded-full w-10 h-10" />
            <a href="" className="lexend-extralight text-white text-md">Name user</a>
            <button type="submit" class="cursor-pointer text-sm lexend-extralight flex items-center gap-2 px-3 py-2 bg-[#2A85FF] text-[#f1f1f1] rounded-lg transition shadow-md hover:bg-[#ffffff] hover:text-[#2A85FF]">

                Seguir

            </button>

        </section>
    )
}

export default FriendSuggestion