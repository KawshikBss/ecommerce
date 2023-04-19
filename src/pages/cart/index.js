import Button from "@/components/Button";
import CartItem from "@/components/CartItem";
import { Cart as CartCtx } from "@/contexts/CartContext";
import products from "@/data/productsdata";
import React, { useContext } from "react";

function Cart() {
    const {
        items,
        totalUniqueItems,
        isEmpty,
        removeItem,
        cartTotal,
        updateItemQuantity,
        emptyCart,
    } = useContext(CartCtx);
    return (
        <div className="w-full flex flex-col justify-between py-[27px] px-7">
            <div className="w-full flex flex-row justify-evenly items-start gap-8">
                <div className="w-full flex flex-col justify-between items-start gap-5 shadow-xl p-4 rounded-md">
                    <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                        My Cart ({totalUniqueItems ? totalUniqueItems : 0})
                    </h3>
                    {items.length > 0 ? (
                        items.map((item, index) => {
                            return (
                                <CartItem
                                    itemId={item.id}
                                    item={item.item}
                                    price={item.totalPrice}
                                    quantity={item.quantity}
                                    updateItemQuantity={updateItemQuantity}
                                    removeItem={removeItem}
                                    key={index}
                                />
                            );
                        })
                    ) : (
                        <h3 className="text-[16px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                            Cart Is Empty
                        </h3>
                    )}
                </div>
                <div className="w-1/3 flex flex-col justify-between items-center gap-6 shadow-xl p-4 rounded-md">
                    <span className="w-full flex flex-row justify-between items-center text-[#212A2F] text-[16px] leading-5 font-bold tracking-[0.5px]">
                        <span>Sub Total:</span>
                        <span>${cartTotal ? cartTotal : "0"}</span>
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
                        <span>${cartTotal ? cartTotal : "0"}</span>
                    </span>
                    <Button label="Checkout" />
                </div>
            </div>
        </div>
    );
}

export default Cart;
