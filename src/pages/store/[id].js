import Accordation from "@/components/Accordation";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { Cart } from "@/contexts/CartContext";
import products from "@/data/products";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { toast } from "react-toastify";

function ProductDetails() {
    const router = useRouter();
    const { id } = router.query;
    const product = id < products.length ? products[id] : products[0];
    const { addItem } = useContext(Cart);
    const handleAddToCart = () => {
        addItem(product);
        toast(
            `${
                product?.name ? product.name : "Item"
            } added successfully to cart`
        );
    };
    return (
        <div className="w-full">
            <div className="w-full flex flex-row justify-between items-start px-3 my-5 gap-5">
                <div className="w-2/3 h-[80vh] rounded-md overflow-hidden">
                    <Image
                        width={200}
                        height={200}
                        src={"/" + product.image}
                        className="w-full h-[80vh] object-cover hover:scale-150 transition-all duration-300 ease-in-out"
                    />
                </div>
                <div className="w-1/3 flex flex-col justify-between items-start gap-6 my-7">
                    <h1 className="text-[32px] font-bold leading-5 tracking-[0.5px] text-[#212A2F]">
                        {product?.name ? product.name : "N/A"}
                    </h1>
                    <span className="flex flex-row gap-4 justify-between items-center">
                        <span className="text-[16px] font-normal leading-5 tracking-[0.5px] text-[#212A2F]">
                            $
                            {product?.discount_price > 0 &&
                                product.discount_price + "  "}
                            <span
                                className={
                                    product?.discount_price > 0
                                        ? "line-through"
                                        : ""
                                }
                            >
                                {product?.price ? product.price : "0.0"}
                            </span>
                        </span>
                        {product?.tags &&
                            product.tags.map((item, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="text-[12px] font-semibold leading-5 tracking-[0.5px] text-[#212A2F] bg-[#F5F5F5] px-2 py-1 italic"
                                    >
                                        {item ? item : "N/A"}
                                    </span>
                                );
                            })}
                    </span>
                    <p className="text-[16px] font-normal leading-5 tracking-[0.5px] text-[#212A2F]">
                        {product?.description ? product.description : "N/A"}
                    </p>
                    <span className="flex flex-row justify-between items-center gap-2">
                        {product?.available_sizes &&
                            product.available_sizes.map((item, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="w-[46px] h-[46px] border-2 text-[#212A2F] border-[#212A2F] rounded-md hover:text-white hover:bg-[#212A2F] flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out"
                                    >
                                        {item}
                                    </span>
                                );
                            })}
                    </span>
                    <Button
                        label={"Add to cart"}
                        handleClick={handleAddToCart}
                    />
                    <span className="text-[12px] font-normal leading-5 tracking-[0.5px] text-[#212A2F] text-center self-center">
                        Free shipping on orders over $75. Free returns.
                    </span>
                    <Accordation label="Size & Fit" />
                    <Accordation label="Material & care instructions" />
                    <Accordation label="Shipping & returns" />
                </div>
            </div>

            <div className="flex flex-col justify-between gap-5 py-8 px-5 my-5 border-b-2">
                <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F] uppercase">
                    Related products
                </h3>
                <div className="flex flex-row flex-wrap gap-5 justify-center">
                    {products &&
                        products.slice(0, 5).map((item, index) => {
                            return <Card item={item} key={index} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
