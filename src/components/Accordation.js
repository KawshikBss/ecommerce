import React from "react";
import { AiOutlineDown } from "react-icons/ai";

function Accordation({ label, details, extend = false }) {
    return (
        <div className="w-full flex flex-col justify-between border-bottom-2 border-[#212A2F]">
            <div className="w-full flex flex-row justify-between items-center">
                <h3 className="text-[12px] font-bold leading-7 tracking-widest uppercase text-[#212A2F]">
                    {label ? label : "Section"}
                </h3>
                <span className="w-full flex flex-row justify-between items-center text-[12px] font-bold leading-7 tracking-widest uppercase text-[#212A2F]">
                    <AiOutlineDown />
                </span>
            </div>
        </div>
    );
}

export default Accordation;
