import productsdata from "@/data/productsdata";
import React from "react";
import ProductListItem from "../ProductListItem";

function Products() {
    return (
        <div className="w-full h-full bg-white flex flex-col gap-4 items-start shadow-xl p-4 rounded-md overflow-y-scroll">
            <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                Products List
            </h3>
            {productsdata.map((product, index) => {
                return product.admin ? (
                    ""
                ) : (
                    <ProductListItem product={product} key={index} />
                );
            })}
        </div>
    );
}

export default Products;
