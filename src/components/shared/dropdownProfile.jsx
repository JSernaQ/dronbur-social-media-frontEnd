import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


export const DropdownProfile = () => {
    return (
        <li className="py-2 w-full px-4 rounded-xl hover:bg-gray-400 gap-4 hover:text-black transition-colors duration-150">
            <FontAwesomeIcon icon={faUser} />
        </li>
    )
}