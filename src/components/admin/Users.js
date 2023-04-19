import users from "@/data/usersdata";
import React from "react";
import UserListItem from "../UserListItem";

function Users() {
    return (
        <div className="w-full h-full bg-white flex flex-col gap-4 items-start shadow-xl p-4 rounded-md overflow-y-scroll">
            <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                Customers List
            </h3>
            {users.map((user, index) => {
                return user.admin ? (
                    ""
                ) : (
                    <UserListItem user={user} key={index} />
                );
            })}
        </div>
    );
}

export default Users;
