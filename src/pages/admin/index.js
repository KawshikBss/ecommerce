import Sidebar from "@/components/Sidebar";
import AddCustomer from "@/components/admin/AddCustomer";
import AddProduct from "@/components/admin/AddProduct";
import Dashboard from "@/components/admin/Dashboard";
import Orders from "@/components/admin/Orders";
import Products from "@/components/admin/Products";
import Users from "@/components/admin/Users";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function Admin() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [pageAccessable, setPageAccessable] = useState(false);
    const { user } = session ? session : {};
    const tabs = [
        "dashboard",
        "customers",
        "add customer",
        "orders",
        "products",
        "add product",
    ];
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const changeTab = (tabName) => {
        if (currentTab === tabName) return;
        setCurrentTab(tabName);
    };
    /* if (
        typeof window !== "undefined" &&
        status === "unauthenticated" &&
        !session
    ) {
        router.push("/auth");
    } */
    useEffect(() => {
        if (!session || status === "unauthenticated") {
            router.push("/");
        } else if (session && status === "authenticated") {
            setPageAccessable(true);
        }
    }, []);

    return pageAccessable ? (
        <div className="w-full h-[90vh] bg-[#f1ebe7] flex flex-row justify-between items-start">
            <Sidebar
                user={user}
                currentTab={currentTab}
                tabs={tabs}
                changeTab={changeTab}
            />
            <div className="w-4/5 h-full justify-center items-center p-4">
                {currentTab === "dashboard" ? (
                    <Dashboard />
                ) : currentTab === "customers" ? (
                    <Users />
                ) : currentTab === "add customer" ? (
                    <AddCustomer />
                ) : currentTab === "orders" ? (
                    <Orders />
                ) : currentTab === "products" ? (
                    <Products />
                ) : currentTab === "add product" ? (
                    <AddProduct />
                ) : (
                    ""
                )}
            </div>
        </div>
    ) : (
        <h1 className="text-[32px] leading-5 font-bold tracking-[0.5px] text-[#212A2F]">
            Loading...
        </h1>
    );
}

export default Admin;
