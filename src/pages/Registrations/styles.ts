import styled from "styled-components";

export const Container = styled.div`
    min-height: 100vh;
    background: #e8e8e8;
`;

export const Header = styled.div`
    padding-top: 5rem;
    text-align:center;
    font-size: 2rem;
    font-weight: bold;
`;

export const AreaWorkshop = styled.div`
    padding: 2rem;
    width: 100%;
    max-width: 900px;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media(max-width: 600px) {
        display:flex;
       flex-direction: column;
    }
 `;