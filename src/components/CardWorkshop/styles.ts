import styled from "styled-components";

export const Container = styled.div`
    box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
    margin: 1rem;
    padding: 10px;
    &:hover {
       
    }

    .info {
        strong {
            text-transform: capitalize;
        }
        display:flex;
        flex-direction: column;
        align-items:center;
        padding: 10px;
    }

    .button {
        display:flex;
        align-items:center;
        justify-content:center;

        padding: 0 5px;
        
        height: 56px;
        width: 70%;
        margin: 0 auto;

        font-size: 14px;
        font-weight: bold;
        text-decoration:none;
        color: #505f79;

        box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0;
        border-radius: 10px;
        margin-bottom: 10px;
    }

    svg{
        margin-right: 16px;
    }
`;