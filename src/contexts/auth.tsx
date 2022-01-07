import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface AuthContextData {
    signed: boolean;
    login(login: string, password: string): Promise<void>
    logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

    const [user, setUser] = useState<Object | null>(null);

    async function login(login: string, password: string) {
        
        try {
            const response = await api.post('/auth/login', {
                username: login,
                password
            });

            sessionStorage.setItem('@event:token', response.data.access_token);
            api.defaults.headers.common.authorization = `Bearer ${response.data.access_token}`;
            setUser({
                name: login
            });
        } catch (error) {
            throw new Error('Login ou senha incorretos!');
        }

    }

    async function logout() {
        setUser(null);
        sessionStorage.removeItem('@event:token');
        window.location.href = '../';
    }

    useEffect(() => {
        const token = sessionStorage.getItem('@event:token');
        
        if(token) {
            setUser({
                name: 'admin'
            });
        }

        api.defaults.headers.common.authorization = `Bearer ${token}`;
    }, []);

    return(
        <AuthContext.Provider value={{signed: Boolean(user), login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}