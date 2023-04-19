import Button from "@/components/Button";
import InputField from "@/components/InputField";
import { searchUser } from "@/services/utils";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

function Auth() {
    const router = useRouter();
    const [signInFormData, setSignInFormData] = useState({
        phone: "",
        password: "",
    });
    const [signUpFormData, setSignUpFormData] = useState({
        "first name": "",
        "last name": "",
        phone: "",
        password: "",
        "confirm password": "",
    });
    const handleSignInInputChange = (event) => {
        const { name, value } = event.target;
        setSignInFormData((curr) => ({
            ...curr,
            [name]: value,
        }));
    };
    const handleSignUpInputChange = (event) => {
        const { name, value } = event.target;
        setSignUpFormData((curr) => ({
            ...curr,
            [name]: value,
        }));
    };
    const handleSignIn = async () => {
        /* const user = searchUser(signInFormData.phone);
        if (!user) return;
        if (user.password === signInFormData.password) { */
        const res = await signIn("credentials", {
            ...signInFormData,
            redirect: false,
        }).catch((error) => {
            console.log(error);
        });
        console.log(res);
        /* router.push("/");
        } */
    };
    const handleSignUp = () => {
        console.log(signUpFormData);
        router.push("/");
    };
    return (
        <div className="w-full flex flex-row justify-evenly items-start bg-[#f1ebe7] py-[200px]">
            <div className="w-1/3 flex flex-col justify-between items-start gap-[19px]">
                <h1 className="font-semibold text-black text-[1.5rem] uppercase">
                    Login
                </h1>
                <InputField
                    label="phone"
                    handleChange={handleSignInInputChange}
                />
                <InputField
                    label="password"
                    secureInput
                    handleChange={handleSignInInputChange}
                />
                <Button label="login" handleClick={handleSignIn} />
            </div>
            <div className="w-1/3 flex flex-col justify-between items-start gap-[19px]">
                <h1 className="font-semibold text-black text-[1.5rem] uppercase">
                    Sign Up
                </h1>
                <InputField
                    label="first name"
                    handleChange={handleSignUpInputChange}
                />
                <InputField
                    label="last name"
                    handleChange={handleSignUpInputChange}
                />
                <InputField
                    label="phone"
                    handleChange={handleSignUpInputChange}
                />
                <InputField
                    label="password"
                    secureInput
                    handleChange={handleSignUpInputChange}
                />
                <InputField
                    label="confirm password"
                    secureInput
                    handleChange={handleSignUpInputChange}
                />
                <Button label="sign up" handleClick={handleSignUp} />
            </div>
        </div>
    );
}

export default Auth;
