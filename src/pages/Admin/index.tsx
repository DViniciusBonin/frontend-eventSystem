import { Login } from '../../components/Login';
import {useAuth} from '../../contexts/auth';
import { Dashboard } from '../Dashboard';


export function Admin() {
    
    const { signed } = useAuth(); 

    return signed ? <Dashboard /> : <Login />
}