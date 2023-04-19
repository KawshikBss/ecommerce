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
            <div className="w-full flex flex-row justify-between items-center">
                <div className="w-2/5 flex flex-col justify-between items-center gap-6 shadow-xl p-4 rounded-md">
                    <span className="w-full flex flex-row justify-between items-center text-[#212A2F] text-[16px] leading-5 font-bold tracking-[0.5px]">
                        <span>Customer:</span>
                        <span>
                            {order.customer ? order.customer : "Customer"}
                        </span>
                    </span>
                    <span className="w-full flex flex-row justify-between items-center text-[#212A2F] text-[16px] leading-5 font-bold tracking-[0.5px]">
                        <span>Phone:</span>
                        <span>{order.phone ? order.phone : "N/A"}</span>
                    </span>
                    <span className="w-full flex flex-row justify-between items-center text-[#212A2F] text-[16px] leading-5 font-bold tracking-[0.5px]">
                        <span>Shipping Addres:</span>
                        <span>
                            {order.shipping_address
                                ? order.shipping_address
                                : "N/A"}
                        </span>
                    </span>
                    <span className="w-full flex flex-row justify-between items-center text-[#212A2F] text-[16px] leading-5 font-bold tracking-[0.5px]">
                        <span>Customer:</span>
                        <span>
                            {order.customer ? order.customer : "Customer"}
                        </span>
                    </span>
                    <span className="w-full flex flex-row justify-between items-center text-[#212A2F] text-[16px] leading-5 font-bold tracking-[0.5px]">
                        <span>Payment:</span>
                        <span>
                            {order.payment ? order.payment : "Cash On Delivery"}
                        </span>
                    </span>
                    <span className="w-full flex flex-row justify-between items-center text-[#212A2F] text-[16px] leading-5 font-bold tracking-[0.5px]">
                        <span>Status:</span>
                        <span className="uppercase">
                            {order?.status ? order.status : "processing"}
                        </span>
                    </span>
                    <span className="w-full flex flex-row justify-between items-center border-[#212A2F] pt-4 text-[#212A2F] text-[20px] leading-5 font-bold tracking-[0.5px]">
                        <span>Bill:</span>
                        <span>${order.total ? order.total : "0"}</span>
                    </span>
                </div>
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
