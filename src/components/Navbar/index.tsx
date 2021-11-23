import * as Style from './styles';

export function Navbar() {
    
    return(
        <Style.Container>
            <Style.Menu>
                <h1>Logo</h1>
                <Style.Options>
                    <Style.StyledLink to="/" style={{textDecoration: 'none'}}>Início</Style.StyledLink>
                    <Style.StyledLink to="/eventos-anteriores" style={{textDecoration: 'none'}}>Eventos anteriores</Style.StyledLink>
                </Style.Options>
            </Style.Menu>
        </Style.Container>
    );
}