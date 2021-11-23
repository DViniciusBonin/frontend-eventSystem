import { Link } from 'react-router-dom';
import  styled  from 'styled-components';

export const Container = styled.div<{photo: string;}>`
    font-size: 1.2rem;
    color: #fff;
    margin: 0 auto;
    min-height: 100vh;
    background:  url(${(props) => props.photo}) no-repeat center;
    background-size: cover;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #fff;

    &:hover {
        color: #000;
        transition: 1s;
    }
`;

export const Info = styled.div`
    text-align: center;
    box-shadow: 0 0 30px gray;
    border-radius: 10%;
    padding: 30px;
    background: rgba(0,0,0, 0.5);
`;

export const Button = styled.button`
    background: #1c60ff;
    border: 0;
    outline: 0;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    width: 100%;
    max-width: 120px;

    &:hover {
        background: #1cff6b;
        transition: 1s;
    }
;
`;