import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { BsFillCartFill, BsBagFill } from "react-icons/bs";
import { AiTwotoneAlert } from "react-icons/ai";
import usersdata from "@/data/usersdata";
import ordersdata from "@/data/ordersdata";
import productsdata from "@/data/productsdata";

function Dashboard() {
    return (
        <div className="w-full h-full bg-white flex flex-col gap-4 items-center shadow-xl p-4 rounded-md overflow-y-scroll">
            <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F] self-start">
                Overview
            </h3>
            <div className="w-[410px] m-6 flex flex-row flex-wrap gap-1 items-center">
                <div className="w-[200px] h-[200px] border-2 rounded-md flex flex-col gap-4 justify-center items-center">
                    <FaUserAlt className="text-[48px] text-[#212A2F] leading-5 font-bold tracking-[0.5px]" />
                    <span className="text-[16px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                        Customers - ({usersdata.length})
                    </span>
                </div>
                <div className="w-[200px] h-[200px] border-2 rounded-md flex flex-col gap-4 justify-center items-center">
                    <BsFillCartFill className="text-[48px] text-[#212A2F] leading-5 font-bold tracking-[0.5px]" />
                    <span className="text-[16px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                        Orders - ({ordersdata.length})
                    </span>
                </div>
                <div className="w-[200px] h-[200px] border-2 rounded-md flex flex-col gap-4 justify-center items-center">
                    <BsBagFill className="text-[48px] text-[#212A2F] leading-5 font-bold tracking-[0.5px]" />
                    <span className="text-[16px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                        Products - ({productsdata.length})
                    </span>
                </div>
                <div className="w-[200px] h-[200px] border-2 rounded-md flex flex-col gap-4 justify-center items-center">
                    <AiTwotoneAlert className="text-[48px] text-[#212A2F] leading-5 font-bold tracking-[0.5px]" />
                    <span className="text-[16px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                        Reports - (0)
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
