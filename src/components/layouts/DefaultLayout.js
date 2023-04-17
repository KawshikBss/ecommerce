import React from "react";
import Header from "../Header";

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            {children}
            <h1>Footer</h1>
        </>
    );
}

export default DefaultLayout;
