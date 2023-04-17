import React from "react";

function Button({ label, handleClick }) {
    return (
        <span className="w-full font-semibold text-[0.7em] tracking-[1px] uppercase text-center py-[20px] border-2 border-black bg-black hover:bg-white text-white hover:text-black transition-all duration-300 ease-in-out cursor-pointer">
            {label ? label : "Click Me"}
        </span>
    );
}

export default Button;
