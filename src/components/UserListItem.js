import React from "react";

function UserListItem({ user }) {
    return (
        <div className="w-full flex flex-row justify-between items-center gap-4 px-6 border-b-2">
            <div className="w-2/3 flex flex-col justify-between items-start">
                <h3 className="text-[14px] text-[#212A2F] font-semibold leading-6 tracking-wider">
                    {user?.name ? user.name : "Product Name"}
                </h3>
                <span className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider">
                    Phone: {user?.phone ? user.phone : "10"}
                </span>
                <span className="text-[12px] text-[#212A2F] font-normal leading-6 tracking-wider">
                    Status: {user?.is_available ? user.is_available : "Active"}
                </span>
            </div>
            <span className="flex flex-row justify-between items-center gap-2 border-2 border-[#212A2F] rounded-md overflow-hidden">
                <span className="flex justify-center items-center bg-white hover:bg-[#212A2F] text-[#212A2F] hover:text-white px-2 cursor-pointer  transition-all duration-300 ease-in-out">
                    View
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

export default UserListItem;
