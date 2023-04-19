import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductListItem({ product }) {
    return (
        <div className="w-full flex flex-row justify-between items-start gap-4 px-6 py-2 border-b-2">
            <div className="w-2/3 flex flex-row justify-between items-start gap-8">
                <div className="w-1/3 h-[15vh] rounded-md overflow-hidden">
                    <Link href={"/store/" + product.id}>
                        <Image
                            width={200}
                            height={200}
                            src={"/" + product.image}
                            alt={product.image}
                            className="w-full h-[15vh] object-cover rounded-md hover:scale-150 transition-all duration-300 ease-in-out"
                        />
                    </Link>
                </div>
                <div className="w-2/3 flex flex-col justify-between items-start">
                    <h3 className="text-[14px] text-[#212A2F] font-semibold leading-6 tracking-wider">
                        {product?.name ? product.name : "Product Name"}
                    </h3>
                    <span className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider">
                        Price: ${product?.price ? product.price : "0"}
                    </span>
                    <span className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider">
                        Stock:{" "}
                        {product?.is_available
                            ? product.is_available
                            : "Available"}
                    </span>
                    <div className="flex flex-row justify-between items-center gap-1">
                        <span className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider">
                            Available Sizes:
                        </span>
                        {product?.available_sizes
                            ? product.available_sizes.map((size, index) => {
                                  return (
                                      <span
                                          key={index}
                                          className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider border-[1px] px-1 rounded-md"
                                      >
                                          {size}
                                      </span>
                                  );
                              })
                            : ""}
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center gap-1">
                    {product?.tags
                        ? product.tags.map((tag, index) => {
                              return (
                                  <span
                                      key={index}
                                      className="text-[12px] text-white bg-[#212A2F] font-normal leading-6 tracking-wider border-[1px] px-2 rounded-md"
                                  >
                                      {tag}
                                  </span>
                              );
                          })
                        : ""}
                </div>
            </div>

            <span className="flex flex-row justify-between items-center gap-2 border-2 border-[#212A2F] rounded-md overflow-hidden">
                <span className="flex justify-center items-center bg-white hover:bg-[#212A2F] text-[#212A2F] hover:text-white px-2 cursor-pointer  transition-all duration-300 ease-in-out">
                    <Link href={"/store/" + product.id}>View</Link>
                </span>
                <span className="flex justify-center items-center bg-white hover:bg-[#212A2F] text-[#212A2F] hover:text-white px-2 cursor-pointer  transition-all duration-300 ease-in-out">
                    Report
                </span>
                <span className="flex justify-center items-center bg-white hover:bg-[#212A2F] text-[#212A2F] hover:text-white px-2 cursor-pointer  transition-all duration-300 ease-in-out">
                    Remove
                </span>
            </span>
        </div>
    );
}

export default ProductListItem;
