import React, { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import Card from "./Card";

function Carousel({ items }) {
    const [xOffset, setxOffset] = useState(0);
    const [currentElement, setCurrentElement] = useState(0);
    const handleNext = () => {
        setCurrentElement((curr) => {
            return curr < items.length - 1 ? curr + 1 : 0;
        });
        setxOffset((curr) => {
            if (currentElement < items.length - 1) return curr + 380;
            return 0;
        });
    };
    return (
        <div className="w-full flex flex-col justify-between gap-4 items-start py-12">
            <h1 className="text-[32px] leading-[1.31] font-bold tracking-[0.5px] text-[#212A2F] ml-6">
                Now On Sale
            </h1>
            <div className="w-11/12 ml-auto overflow-x-hidden relative">
                <div
                    style={{ right: xOffset + "px" }}
                    className="flex flex-row justify-between items-center gap-5 relative shadow-2xl transition-all duration-300 ease-in-out"
                >
                    {items &&
                        items.map((item, index) => {
                            return <Card item={item} key={index} />;
                        })}
                </div>
                <span
                    onClick={handleNext}
                    className="w-[48px] h-[48px] flex justify-center items-center bg-white shadow-2xl rounded-full border-2 border-white hover:border-black cursor-pointer absolute right-5 inset-y-12 transition-all duration-300 ease-in-out"
                >
                    <AiOutlineRight className="text-[38px] text-black" />
                </span>
            </div>
        </div>
    );
}

export default Carousel;
