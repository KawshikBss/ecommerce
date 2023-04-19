import React, { useState } from "react";
import InputField from "../InputField";
import Button from "../Button";
import { toast } from "react-toastify";

function AddProduct() {
    const [formData, setFormData] = useState({
        "product name": "",
        price: "",
        discount: "",
        stock: "",
        "available sizes": "",
        tags: "",
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((curr) => ({
            ...curr,
            [name]: value,
        }));
    };
    const handleSubmit = () => {
        toast.success("Product added successfully");
        console.log(formData);
    };
    return (
        <div className="w-full h-full bg-white flex flex-col gap-4 items-center shadow-xl p-4 rounded-md overflow-y-scroll">
            <h3 className="text-[22px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
                Add new Product
            </h3>
            <div className="w-1/3 bg-[#f1ebe7] p-2 rounded-md flex flex-col justify-between items-start gap-[19px]">
                <InputField
                    label="product name"
                    handleChange={handleInputChange}
                />
                <InputField label="price" handleChange={handleInputChange} />
                <InputField label="discount" handleChange={handleInputChange} />
                <InputField label="stock" handleChange={handleInputChange} />
                <InputField
                    label="available sizes"
                    handleChange={handleInputChange}
                />
                <InputField label="tags" handleChange={handleInputChange} />
                <Button label="Add Product" handleClick={handleSubmit} />
            </div>
        </div>
    );
}

export default AddProduct;
