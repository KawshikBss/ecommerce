import Image from "next/image";
import React from "react";

function CartItem({ item }) {
    return (
        <div className="w-full flex flex-row justify-between items-center">
            <Image
                width={200}
                height={200}
                src={"/" + item.image}
                className="w-1/5 object-contain"
            />
        </div>
    );
}

export default CartItem;
