import { data } from "autoprefixer";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";

function Admin() {
    const { data: session, status } = useSession();
    const router = useRouter();
    if (!session || status === "unauthenticated") {
        router.push("/");
    }
    const { user } = session || {};
    console.log(user);
    return <div>Hello {user?.name}</div>;
}

export default Admin;
