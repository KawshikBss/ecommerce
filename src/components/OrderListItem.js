import Image from "next/image";
import Link from "next/link";
import React from "react";

function OrderListItem({ order }) {
    return (
        <div className="w-full flex flex-row justify-between items-start gap-4 px-6 border-b-2">
            <div className="w-2/5 flex flex-col justify-between items-start">
                <h3 className="text-[14px] text-[#212A2F] font-semibold leading-6 tracking-wider">
                    {order?.customer ? order.customer : "Customer Name"}
                </h3>
                <span className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider">
                    Bill : ${order?.total ? order.total : "0"}
                </span>
                <span className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider">
                    Status: {order?.status ? order.status : "Processing"}
                </span>
            </div>
            <div className="w-2/5 flex flex-col justify-between items-start">
                {order?.products
                    ? order.products.map((product, index) => {
                          return (
                              <div
                                  key={index}
                                  className="w-2/3 flex flex-row justify-between items-start gap-8"
                              >
                                  <Image
                                      width={200}
                                      height={200}
                                      src={"/" + product.image}
                                      alt={product.image}
                                      className="w-1/3 h-[7vh] object-cover rounded-md"
                                  />
                                  <div className="w-2/3 flex flex-col justify-between items-start">
                                      <h3 className="text-[14px] text-[#212A2F] font-semibold leading-6 tracking-wider">
                                          {product?.name
                                              ? product.name
                                              : "Product Name"}
                                      </h3>
                                      <span className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider">
                                          Price: $
                                          {product?.price ? product.price : "0"}
                                      </span>
                                      <span className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider">
                                          Quantity:{" "}
                                          {product?.quantity
                                              ? product.quantity
                                              : "0"}
                                      </span>
                                  </div>
                              </div>
                          );
                      })
                    : ""}
            </div>
            <span className="flex flex-row justify-between items-center gap-2 border-2 border-[#212A2F] rounded-md overflow-hidden">
                <span className="flex justify-center items-center bg-white hover:bg-[#212A2F] text-[#212A2F] hover:text-white px-2 cursor-pointer  transition-all duration-300 ease-in-out">
                    <Link href={`/order/${order.id}`}>View</Link>
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

export default OrderListItem;
