import Button from "@/components/Button";
import InputField from "@/components/InputField";
import React from "react";

function User() {
    return (
        <div className="w-full flex flex-row justify-evenly items-start bg-[#f1ebe7] py-[200px]">
            <div className="w-1/3 flex flex-col justify-between items-start gap-[19px]">
                <h1 className="font-semibold text-black text-[1.5rem] uppercase">
                    Login
                </h1>
                <InputField label="email" />
                <InputField label="password" secureInput />
                <Button label="login" />
            </div>
            <div className="w-1/3 flex flex-col justify-between items-start gap-[19px]">
                <h1 className="font-semibold text-black text-[1.5rem] uppercase">
                    Sign Up
                </h1>
                <InputField label="first name" />
                <InputField label="last name" />
                <InputField label="email" />
                <InputField label="password" secureInput />
                <InputField label="confirm password" secureInput />
                <Button label="sign up" />
            </div>
        </div>
    );
}

export default User;
