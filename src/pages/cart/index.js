import React from "react";

function Cart() {
    return (
        <div className="w-full flex flex-col justify-between py-[27px] px-[130px]">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="w-full flex flex-col justify-between items-start">
                    <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                        My Cart (0)
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Cart;
