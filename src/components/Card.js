import Image from "next/image";
import React from "react";

function Card({ item }) {
    return (
        <div className="min-w-[360px] h-[455px] rounded-md shadow-2xl flex flex-col justify-between">
            <Image
                width={360}
                height={325}
                src={"/" + item.image}
                className="min-w-[360px] h-[325px] rounded-md object-cover"
            />
            <div className="flex flex-col p-[18px] justify-between items-start">
                <h3 className="text-[22px] leading-[1.32] tracking-[0.5px] font-bold text-[#212A2F]">
                    {item?.name ? item.name : "N/A"}
                </h3>
                <p className="text-[16px] leading-[1.5] tracking-[0.5px] font-normal text-[#212A2F]">
                    {item?.price ? item.price : "0"}$
                </p>
            </div>
        </div>
    );
}

export default Card;
