import { Workshop } from "../../types/Event";
import * as Style from './styles';
import {FcGoogle} from 'react-icons/fc'

type Props = {
    data: Workshop;
}

export function CardWorkshop({data} : Props) {
    return(
        <Style.Container>
           <div className="info">
               <strong>{data.name}</strong>
               <span>Vagas disponiveis: {data.vacancies} </span>
           </div>
           <a href="#" className="button">
                <FcGoogle size="24" />
                Inscreva-se com Google
            </a>
        </Style.Container>
    );
}