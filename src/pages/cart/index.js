import Button from "@/components/Button";
import CartItem from "@/components/CartItem";
import products from "@/data/products";
import React from "react";

function Cart() {
    return (
        <div className="w-full flex flex-col justify-between py-[27px] px-7">
            <div className="w-full flex flex-row justify-evenly items-start gap-8">
                <div className="w-full flex flex-col justify-between items-start gap-5 shadow-xl p-4 rounded-md">
                    <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                        My Cart (0)
                    </h3>
                    {products &&
                        products.slice(0, 3).map((item, index) => {
                            return <CartItem item={item} key={index} />;
                        })}
                </div>
                <div className="w-1/3 flex flex-col justify-between items-center gap-6 shadow-xl p-4 rounded-md">
                    <span className="w-full flex flex-row justify-between items-center text-[#212A2F] text-[16px] leading-5 font-bold tracking-[0.5px]">
                        <span>Sub Total:</span>
                        <span>$0.0</span>
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
                        <span>$0.0</span>
                    </span>
                    <Button label="Checkout" />
                </div>
            </div>
        </div>
    );
}

export default Cart;
