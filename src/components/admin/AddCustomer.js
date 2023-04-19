import React, { useState } from "react";
import InputField from "../InputField";
import Button from "../Button";
import { toast } from "react-toastify";

function AddCustomer() {
    const [formData, setFormData] = useState({
        "first name": "",
        "last name": "",
        phone: "",
        password: "",
        "confirm password": "",
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((curr) => ({
            ...curr,
            [name]: value,
        }));
    };
    const handleSubmit = () => {
        toast.success("Customer added successfully");
        console.log(formData);
    };
    return (
        <div className="w-full h-full bg-white flex flex-col gap-4 items-center shadow-xl p-4 rounded-md overflow-y-scroll">
            <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                Add new Customer
            </h3>
            <div className="w-1/3 bg-[#f1ebe7] p-2 rounded-md flex flex-col justify-between items-start gap-[19px]">
                <InputField
                    label="first name"
                    handleChange={handleInputChange}
                />
                <InputField
                    label="last name"
                    handleChange={handleInputChange}
                />
                <InputField label="phone" handleChange={handleInputChange} />
                <InputField
                    label="password"
                    secureInput
                    handleChange={handleInputChange}
                />
                <InputField
                    label="confirm password"
                    secureInput
                    handleChange={handleInputChange}
                />
                <Button label="Add Customer" handleClick={handleSubmit} />
            </div>
        </div>
    );
}

export default AddCustomer;
