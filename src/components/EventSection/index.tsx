import * as Style from './styles';

type Props = {
    id: string;
    photo: string;
    title: string;
}

export function EventSection({id, photo, title}: Props) {
    return(
       <Style.Container photo={photo}>
          <Style.Info>
               <h1>{title}</h1>
           <Style.Button><Style.StyledLink to={`/inscricoes/${id}`}>Inscrições </Style.StyledLink></Style.Button>
          </Style.Info>
       </Style.Container>
    );
}