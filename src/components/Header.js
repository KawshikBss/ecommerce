import Link from "next/link";
import React, { useState } from "react";
import {
    AiOutlineSearch,
    AiOutlineUser,
    AiOutlineShoppingCart,
    AiOutlineLogout,
} from "react-icons/ai";
import styles from "@/styles/Header.module.css";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

function Header() {
    const [searchExtended, setSearchExtended] = useState(false);
    const toggleSearchBar = () => {
        setSearchExtended((curr) => !curr);
    };

    const { data: session, status } = useSession();

    return (
        <nav className="flex flex-row justify-between items-center p-[12px]">
            <ul className="flex flex-row justify-between items-center gap-[18px] list-none">
                <li className="font-bold hover:font-black text-[12px] leading-7 tracking-[1.7px] uppercase text-[#212A2F]">
                    <Link href={"/store"}>Store</Link>
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
                <li className="flex flex-row justify-between items-center font-bold text-[22px] leading-7 tracking-[1.7px] uppercase text-[#212A2F]">
                    <input
                        className={`w-0 border-2 border-black rounded-md mr-5 transition-all duration-300 ease-in-out ${
                            searchExtended
                                ? styles.search_bar_extended
                                : "border-2 border-transparent"
                        }`}
                    />
                    <Link href={"/"}>
                        <AiOutlineSearch onClick={toggleSearchBar} />
                    </Link>
                </li>
                {(status === "unauthenticated" ||
                    (session?.user && session.user.name === "admin")) && (
                    <li className="font-bold text-[22px] leading-7 tracking-[1.7px] uppercase text-[#212A2F]">
                        <Link
                            href={
                                session?.user && status === "authenticated"
                                    ? "/admin"
                                    : "/auth"
                            }
                        >
                            <AiOutlineUser />
                        </Link>
                    </li>
                )}
                {session?.user && status === "authenticated" && (
                    <li
                        className="font-bold text-[22px] leading-7 tracking-[1.7px] uppercase text-[#212A2F] cursor-pointer"
                        onClick={() => signOut()}
                    >
                        <AiOutlineLogout />
                    </li>
                )}
                <li className="font-bold text-[22px] leading-7 tracking-[1.7px] uppercase text-[#212A2F]">
                    <Link href={"/cart"}>
                        <AiOutlineShoppingCart />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
