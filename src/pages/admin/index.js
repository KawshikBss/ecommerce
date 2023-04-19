import { data } from "autoprefixer";
import { useSession } from "next-auth/react";
import React from "react";

function Admin() {
    const { data: session, status } = useSession();
    console.log({ session, status });
    // if (status !== 'unauthenticated' || !session) return <div>Admin</div>;
    const { user } = session || {};
    console.log(user);
    return <div>User</div>;
}

export default Admin;
