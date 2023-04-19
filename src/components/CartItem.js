import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlinePlus, AiOutlineMinus, AiFillDelete } from "react-icons/ai";

function CartItem({
    itemId,
    item,
    price,
    quantity,
    updateItemQuantity,
    removeItem,
}) {
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
                    ${price ? price : "100"}
                </h3>
                <span className="flex flex-row justify-between items-center gap-2 border-2 border-[#212A2F] rounded-xl px-2">
                    <span
                        onClick={() => updateItemQuantity(itemId, -1)}
                        className="w-[20px] h-[20px] flex justify-center items-center bg-white hover:bg-[#212A2F] text-[#212A2F] hover:text-white rounded-xl cursor-pointer  transition-all duration-300 ease-in-out"
                    >
                        <AiOutlineMinus />
                    </span>
                    <span className="text-[14px] text-[#212A2F] font-semibold leading-6 tracking-wider">
                        {quantity ? quantity : 0}
                    </span>
                    <span
                        onClick={() => updateItemQuantity(itemId, 1)}
                        className="w-[20px] h-[20px] flex justify-center items-center bg-white hover:bg-[#212A2F] text-[#212A2F] hover:text-white rounded-xl cursor-pointer  transition-all duration-300 ease-in-out"
                    >
                        <AiOutlinePlus />
                    </span>
                </span>
                <span
                    onClick={() => removeItem(itemId)}
                    className="w-[20px] h-[20px] flex justify-center items-center bg-white hover:bg-[#212A2F] text-[#212A2F] hover:text-white rounded-full cursor-pointer  transition-all duration-300 ease-in-out"
                >
                    <AiFillDelete />
                </span>
            </div>
        </div>
    );
}

export default CartItem;
