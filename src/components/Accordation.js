import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import styles from "@/styles/Accordation.module.css";

function Accordation({ label, details }) {
    const [extended, setExtended] = useState(false);
    const toggleExtended = () => {
        setExtended((curr) => !curr);
    };
    return (
        <div
            className="w-full flex flex-col justify-between border-b-2 border-[#212A2F] pt-[12px] pb-[9px] cursor-pointer"
            onClick={toggleExtended}
        >
            <div className="w-full flex flex-row justify-between items-center px-1">
                <h3 className="text-[12px] font-bold leading-7 tracking-widest uppercase text-[#212A2F]">
                    {label ? label : "Section"}
                </h3>
                <span
                    className={`text-[12px] font-bold leading-7 tracking-widest uppercase text-[#212A2F] transition-all duration-300 ease-in-out ${
                        extended && styles.accord_extend_btn_active
                    }`}
                >
                    <AiOutlineDown />
                </span>
            </div>
            <p
                className={`h-0 hidden w-full px-1 transition-all duration-300 ease-in-out ${
                    extended && styles.accord_details_extended
                }`}
            >
                {details
                    ? details
                    : "Sit reprehenderit irure consequat esse culpa labore. Excepteur dolore id sit culpa velit. Sit irure voluptate anim voluptate nostrud do do aliqua cillum laboris est culpa amet adipisicing."}
            </p>
        </div>
    );
}

export default Accordation;
