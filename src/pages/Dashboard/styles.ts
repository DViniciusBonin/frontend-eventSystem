import { Button } from './../../components/EventSection/styles';
import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
`;

export const Navbar = styled.nav`
    width: 100%;
    background: #000;
    color: white;
    display: flex;
    align-items:center;
    justify-content: space-around;
    padding: 10px;

    button {
        background: transparent;
        outline: 0;
        border:0;
        padding: 5px;
    }
    svg {
        color: white;
    }
`;

export const AreaEvents = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    margin: 0 auto;
    place-items: center;
`;

export const ListEvents = styled.div`
    width: 100%;
    border: 1px solid green;
    display: flex;
    justify-content: center;
    ul {
        list-style: none;
    }

    ul li {
        &:hover {
            background-color: #ccc;
            cursor: pointer;
        }
    }
`;

export const AreaEvento = styled.div`
    width: 100%;
    border: 1px solid red;
    `;