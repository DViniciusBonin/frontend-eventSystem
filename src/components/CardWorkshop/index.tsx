import { Workshop } from "../../types/Event";
import * as Style from './styles';
import { GoogleLogin } from 'react-google-login'
import { useState } from "react";
import { api } from "../../services/api";
import { AxiosError } from "axios";

type Props = {
    data: Workshop;
}


export function CardWorkshop({data} : Props) {

    
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const success = async(response: any) => {
        setLoading(true);
        const {email, name, imageUrl} = response.profileObj
        setEmail(email);
        setName(name);
        setImageUrl(imageUrl);
        
        try {
            await api.post('/users', {
            name,
            login: email,
            workshop_id: data.id
            });

            setLoading(false);
            alert('Registrado com sucesso');
            window.location.href = '/'
        }catch(error: any) {
            alert('O usuário já está cadastrado!');
            setLoading(false);
        }
    }
    ;

    return(
        <Style.Container>
           <div className="info">
               <strong>{data.name}</strong>
               <span>Vagas disponiveis: {data.vacancies} </span>
           </div>
           <a href="#" className="button">
                <GoogleLogin 
                    buttonText={!loading ? 'Inscreva-se com Google' : 'Carregando ...'} 
                    clientId={process.env.REACT_APP_CLIENT_ID as string}
                    onSuccess={success}
                    onFailure={success}
                    onRequest={() => console.log('terminou')}
                />
            </a>
        </Style.Container>
    );
}