import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import users from "@/data/users";
import { searchUser } from "@/services/utils";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Phone Number and Password",
            credentials: {
                phone: { label: "Phone", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { phone, password } = credentials;
                const user = searchUser(phone);
                if (!user) {
                    throw new Error("No user found");
                }
                const isValid = password === user.password;
                if (!isValid) {
                    throw new Error("Invalid password");
                }
                return {
                    id: user.id,
                    name: user.name,
                    phone: user.phone,
                    admin: user.admin,
                };
            },
        }),
    ],
    session: {
        jwt: true,
    },
    pages: {
        signIn: "/auth",
    },
};

export default (req, res) => NextAuth(req, res, authOptions);
