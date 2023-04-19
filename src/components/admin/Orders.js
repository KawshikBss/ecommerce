import ordersdata from "@/data/ordersdata";
import React from "react";
import OrderListItem from "../OrderListItem";

function Orders() {
    return (
        <div className="w-full h-full bg-white flex flex-col gap-4 items-start shadow-xl p-4 rounded-md overflow-y-scroll">
            <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                Orders List
            </h3>
            {ordersdata.map((order, index) => {
                return <OrderListItem order={order} key={index} />;
            })}
        </div>
    );
}

export default Orders;
