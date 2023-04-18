import Card from "@/components/Card";
import products from "@/data/products";
import Image from "next/image";
import React from "react";

function Store() {
    return (
        <div className="w-full">
            <div className="w-full flex flex-row justify-start items-center">
                <Image
                    width={200}
                    height={200}
                    className="w-1/3 h-[60vh] object-cover"
                    src={"/store1.avif"}
                />
                <Image
                    width={200}
                    height={200}
                    className="w-1/3 h-[60vh] object-cover"
                    src={"/store2.avif"}
                />
                <Image
                    width={200}
                    height={200}
                    className="w-1/3 h-[60vh] object-cover"
                    src={"/store3.avif"}
                />
            </div>
            <div className="flex flex-col justify-between gap-5 py-8 px-5 my-5 border-b-2">
                <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                    Minim dolore duis officia aliquip dolor ea anim velit sunt.
                </h3>
                <p className="text-[16px] leading-6 font-normal tracking-[0.5px] text-[#212A2F]">
                    Cillum quis culpa sint cillum dolor cupidatat nostrud sit
                    adipisicing. Eu sit sint amet est sint cillum incididunt.
                    Cupidatat laborum laborum occaecat sint sunt nostrud.
                </p>
                <div className="flex flex-row flex-wrap gap-5 justify-center">
                    {products &&
                        products.slice(0, 5).map((item, index) => {
                            return <Card item={item} key={index} />;
                        })}
                </div>
            </div>
            <div className="flex flex-col justify-between gap-5 py-8 px-5 my-5 border-b-2">
                <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                    Minim dolore duis officia aliquip dolor ea anim velit sunt.
                </h3>
                <p className="text-[16px] leading-6 font-normal tracking-[0.5px] text-[#212A2F]">
                    Cillum quis culpa sint cillum dolor cupidatat nostrud sit
                    adipisicing. Eu sit sint amet est sint cillum incididunt.
                    Cupidatat laborum laborum occaecat sint sunt nostrud.
                </p>
                <div className="flex flex-row flex-wrap gap-5 justify-center">
                    {products &&
                        products.slice(5).map((item, index) => {
                            return <Card item={item} key={index} />;
                        })}
                </div>
            </div>
        </div>
    );
}

export default Store;
