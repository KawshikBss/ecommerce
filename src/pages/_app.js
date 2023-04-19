import DefaultLayout from "@/components/layouts/DefaultLayout";
import AuthContext from "@/contexts/AuthContext";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
    return (
        <SessionProvider session={pageProps.session}>
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </SessionProvider>
    );
}
