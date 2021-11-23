import styled from "styled-components"
import { Link } from "react-router-dom";

export const Container = styled.nav`
    background-color: black;
    width: 100%;
    color: white;
    position: absolute;
    font-size: 1.2rem;
    /*left: 0px;
    top: 0px;*/
    z-index: 1;
`;

export const Menu = styled.div`
    max-width: 900px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    padding: 0.8rem;
`;

export const Options = styled.div`
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    margin: 0 1rem;
    color: #ccc;
    font-weight: bold;
`;