import DefaultLayout from "@/components/layouts/DefaultLayout";
import AuthContext from "@/contexts/AuthContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
    return (
        <AuthContext>
            <DefaultLayout>
                <Component {...pageProps} />
            </DefaultLayout>
        </AuthContext>
    );
}
