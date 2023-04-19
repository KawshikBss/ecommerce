import Image from "next/image";
import Link from "next/link";
import React from "react";

function OrderItem({ item }) {
    return (
        <div className="w-full flex flex-row justify-between items-start">
            <div className="w-2/3 flex flex-row justify-between items-start gap-8">
                <div className="w-1/3 h-[15vh] rounded-md overflow-hidden">
                    <Link href={"/store/" + item.id}>
                        <Image
                            width={200}
                            height={200}
                            src={"/" + item.image}
                            alt={item.image}
                            className="w-full h-[15vh] object-cover rounded-md hover:scale-150 transition-all duration-300 ease-in-out"
                        />
                    </Link>
                </div>
                <div className="w-2/3 flex flex-col justify-between items-start">
                    <h3 className="text-[14px] text-[#212A2F] font-semibold leading-6 tracking-wider">
                        {item?.name ? item.name : "Product Name"}
                    </h3>
                    <span className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider">
                        Size: {item?.size ? item.size : "10"}
                    </span>
                    <span className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider">
                        Stock:{" "}
                        {item?.is_available ? item.is_available : "Available"}
                    </span>
                </div>
            </div>
            <div className="flex flex-col justify-between items-end gap-2">
                <h3 className="text-[14px] text-[#212A2F] font-semibold leading-6 tracking-wider">
                    ${item.price ? item.price : "100"}
                </h3>
                <span className="flex flex-row justify-between items-center gap-2 border-2 border-[#212A2F] rounded-xl px-2">
                    <span className="text-[14px] text-[#212A2F] font-semibold leading-6 tracking-wider">
                        {item.quantity ? item.quantity : 0}
                    </span>
                </span>
            </div>
        </div>
    );
}

export default OrderItem;
