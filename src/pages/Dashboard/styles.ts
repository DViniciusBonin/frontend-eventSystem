import { Link } from 'react-router-dom';
import { Event } from './../../types/Event';
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

    form {
        min-height: 100vh;
        padding-top: 1rem;

        display: flex;
        flex-direction: column;

        label, input {
            width: 100%;
        }

        .workshop {
            display: flex;
            flex-direction: column;
            margin-top: 0.5rem;
        }

        button {
            margin-top: 1rem;
            outline: 0;
            border:0;
            background: #54ff85;
            font-weight: bold;
            color: #000;
            padding: 5px;
            border-radius: 5px;

            &:hover {
                background: #6edb8d;
            }
        }
    }
`;

export const StyledLink = styled(Link)`
    display: inline-block;
    border: 0;
    outline: 0;
    padding: 5px;
    margin-bottom: 1rem;
    background: #5eff74;
    border-radius: 30%;
`;

export const ListEvents = styled.div`
    padding-top: 0.5rem;
    width: 100%;
    border-right: 1px solid black;
    min-height: 90vh; 
    display: flex;
    justify-content: center;

    ul {
        list-style: none;
    }

    ul li {
        
        .update {
            outline: 0;
            background: yellow;
            border: 0;
            color: #000;
            padding: 5px;
        }

        .delete {
            outline: 0;
            background: red;
            border: 0;
            color: #fff;
            padding: 5px;
        }

        div {
            display:flex;
            
        }

        div span {
            width: 100%;
            margin-right: 5px;
            &:hover {
            background-color: #ccc;
            cursor: pointer;
            }
        }

        div button {
            margin: 0.1rem;
        }
    }
`;

export const AreaEvento = styled.div`
    padding: 10px;
    width: 100%;
    min-height: 90vh;
 
    h3,p {
        text-align: center;
    }

    .infoWorkshop {
        display: flex;
        span {
            margin-right: 1rem;
        }
    }
`;