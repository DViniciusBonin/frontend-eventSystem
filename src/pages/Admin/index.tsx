import { FormEvent,  useContext,  useState } from 'react';
import { Login } from '../../components/Login';
import {useAuth} from '../../contexts/auth';
import * as Style from './styles';

export function Admin() {
    
    const { signed } = useAuth(); 

    return signed ? <div>Logado</div> : <Login />
}