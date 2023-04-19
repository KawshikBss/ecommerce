import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/admin/Dashboard";
import Orders from "@/components/admin/Orders";
import Products from "@/components/admin/Products";
import Users from "@/components/admin/Users";
import { data } from "autoprefixer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Admin() {
    const { data: session, status } = useSession();
    const router = useRouter();
    if (!session || status === "unauthenticated") {
        // router.push("/");
    }
    const { user } = session || {};
    const tabs = ["dashboard", "customers", "orders", "products"];
    const [currentTab, setCurrentTab] = useState(tabs[0]);
    const changeTab = (tabName) => {
        if (currentTab === tabName) return;
        setCurrentTab(tabName);
    };
    return (
        <div className="w-full h-[90vh] bg-[#f1ebe7] flex flex-row justify-between items-start">
            <Sidebar user={user} currentTab={currentTab} tabs={tabs} changeTab={changeTab} />
            <div className="w-4/5 h-full justify-center items-center p-4">
                {currentTab === "dashboard" ? (
                    <Dashboard />
                ) : currentTab === "customers" ? (
                    <Users />
                ) : currentTab === "orders" ? (
                    <Orders />
                ) : currentTab === "products" ? (
                    <Products />
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}

export default Admin;
