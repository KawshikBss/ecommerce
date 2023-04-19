import CartItem from "@/components/CartItem";
import OrderItem from "@/components/OrderItem";
import OrderListItem from "@/components/OrderListItem";
import ordersdata from "@/data/ordersdata";
import { useRouter } from "next/router";
import React from "react";

function OrderDetails() {
    const router = useRouter();
    const { id } = router.query;
    const order = id < ordersdata.length ? ordersdata[id] : ordersdata[0];
    return (
        <div className="w-full flex flex-col justify-between py-[27px] px-7">
            <div className="w-1/3 flex flex-col justify-between items-center gap-6 shadow-xl p-4 rounded-md">
                <span className="w-full flex flex-row justify-between items-center text-[#212A2F] text-[16px] leading-5 font-bold tracking-[0.5px]">
                    <span>Sub Total:</span>
                    <span>${order.total ? order.total : "0"}</span>
                </span>
                <span className="w-full flex flex-row justify-between items-center text-[#212A2F] text-[16px] leading-5 font-bold tracking-[0.5px]">
                    <span>Discount:</span>
                    <span>$0.0</span>
                </span>
                <span className="w-full flex flex-row justify-between items-center text-[#212A2F] text-[16px] leading-5 font-bold tracking-[0.5px]">
                    <span>Tax:</span>
                    <span>$0.0</span>
                </span>
                <span className="w-full flex flex-row justify-between items-center border-t-2 border-[#212A2F] pt-4 text-[#212A2F] text-[20px] leading-5 font-bold tracking-[0.5px]">
                    <span>Total:</span>
                    <span>${order.total ? order.total : "0"}</span>
                </span>
            </div>
            <div className="w-full flex flex-col justify-between items-start gap-5 shadow-xl p-4 rounded-md">
                <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                    Order Items ({order?.products ? order?.products.length : 0})
                </h3>
                {order?.products?.length > 0 ? (
                    order.products.map((item, index) => {
                        return <OrderItem item={item} key={index} />;
                    })
                ) : (
                    <h3 className="text-[16px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                        Cart Is Empty
                    </h3>
                )}
            </div>
        </div>
    );
}

export default OrderDetails;
