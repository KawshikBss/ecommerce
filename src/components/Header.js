import Link from "next/link";
import React from "react";
import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineShoppingCart,
} from "react-icons/ai";

function Header() {
    return (
        <nav className="flex flex-row justify-between items-center p-[12px]">
            <ul className="flex flex-row justify-between items-center gap-[18px] list-none">
                <li className="font-bold hover:font-black text-[12px] leading-7 tracking-[1.7px] uppercase text-[#212A2F]">
                    <Link href={"/"}>Store</Link>
                </li>
                <li className="font-bold hover:font-black text-[12px] leading-7 tracking-[1.7px] uppercase text-[#212A2F]">
                    <Link href={"/"}>Trending</Link>
                </li>
                <li className="font-bold hover:font-black text-[12px] leading-7 tracking-[1.7px] uppercase text-[#212A2F]">
                    <Link href={"/"}>New Arrivals</Link>
                </li>
                <li className="font-bold hover:font-black text-[12px] leading-7 tracking-[1.7px] uppercase text-[#AD1F00]">
                    <Link href={"/"}>Sale</Link>
                </li>
            </ul>
            <Link href={"/"}>
                <h1 className=" text-[22px] leading-7 tracking-[1.7px] uppercase text-[#212A2F]">
                    LOGO
                </h1>
            </Link>
            <ul className="flex flex-row justify-between items-center gap-[18px] list-none">
                <li className="font-bold hover:font-black text-[22px] leading-7 tracking-[1.7px] uppercase text-[#212A2F]">
                    <Link href={"/"}>
                        <AiOutlineSearch />
                    </Link>
                </li>
                <li className="font-bold hover:font-black text-[22px] leading-7 tracking-[1.7px] uppercase text-[#212A2F]">
                    <Link href={"/"}>
                        <AiOutlineUser />
                    </Link>
                </li>
                <li className="font-bold hover:font-black text-[22px] leading-7 tracking-[1.7px] uppercase text-[#212A2F]">
                    <Link href={"/"}>
                        <AiOutlineShoppingCart />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
