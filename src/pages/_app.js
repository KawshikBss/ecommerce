import DefaultLayout from "@/components/layouts/DefaultLayout";
import AuthContext from "@/contexts/AuthContext";
import CartContext from "@/contexts/CartContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <CartContext>
                <DefaultLayout>
                    <Component {...pageProps} />
                </DefaultLayout>
            </CartContext>
        </SessionProvider>
    );
}
