import { createContext, useState } from "react";

export const UserContext = createContext();

const AuthContext = ({ children }) => {
    const [authUser, setAuthUser] = useState(undefined);
    const [authToken, setAuthToken] = useState(undefined);
    const [isSignedIn, setIsSignedIn] = useState(false);
    const signIn = (user, authToken = "") => {
        if (!user) return false;
        setAuthUser(user);
        setAuthToken(authToken);
        setIsSignedIn(true);
        return true;
    };
    const signOut = () => {
        if (!authUser || !isSignedIn) return false;
        setAuthUser(undefined);
        setIsSignedIn(false);
        return true;
    };
    return (
        <UserContext.Provider
            value={{
                authUser,
                authToken,
                setAuthToken,
                isSignedIn,
                signIn,
                signOut,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default AuthContext;
