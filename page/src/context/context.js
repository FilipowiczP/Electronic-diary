import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = (props) => {

    const [token, setToken] = useState(null);

    const loginUser = async (token) => {
        setToken(token);
    }

    const logoutUser = () => {
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{ token, loginUser, logoutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;