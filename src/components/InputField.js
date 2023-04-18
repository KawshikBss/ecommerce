import React from "react";

function InputField({ label, handleChange, secureInput = false }) {
    return (
        <div className="w-full flex flex-col justify-between items-start gap-[8px]">
            <span className="font-semibold text-[0.75rem] uppercase tracking-[1px]">
                {label ? label : "Label"}
            </span>
            <input
                type={secureInput ? "password" : "text"}
                name={label ? label : "name"}
                className="w-full p-[20px] rounded-sm font-normal text-[1em]"
                onChange={handleChange}
            />
        </div>
    );
}

export default InputField;
