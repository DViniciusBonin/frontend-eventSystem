import { FormEvent, useState } from "react";
import { useAuth } from "../../contexts/auth";
import * as Style from './styles';


export function Login() {

    const context = useAuth();

    console.log(context);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: FormEvent) {
        e.preventDefault();
        setLoading(true);
        context.login(login, password)
            .then()
            .catch(error => alert(error.message))
            .finally(() => setLoading(false));
    }

    return (
        <Style.Container>
            <form onSubmit={handleLogin}>
                <label>Login</label>
                <input type="text" placeholder="Digite o seu login" onChange={(e) => setLogin(e.target.value)} required/>
                <label>Senha</label>
                <input type="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} required/>
                <button>{ loading ? 'Entrando...' : 'Entrar'}</button>
            </form>
        </Style.Container>
    );
}