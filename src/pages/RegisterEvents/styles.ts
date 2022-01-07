import styled from "styled-components";

export const Container = styled.div`
    div {
        h3 {
        margin-top: 1rem;
        text-align: center;
        }
    }

    form {
        margin-top: 2rem;
        max-width: 900px;
        width: 90%;
        margin: auto;
    }

    form label {
        display: flex;
        flex-direction: column;
    }

    #workshops {
        margin-top: 1rem;
        display: inline-block;

      
    }

    #workshops label {
        margin-top: 1rem;
    }

    #add {
            border: 0;
            outline: 0;
            background: #5eff72;

            width: 20px;
            display: inline;
        }

    .submit {
        display: block;
        margin-top: 0.5rem;
        width: 100%;
        background: #5eff72;
        outline: 0;
        border: 0;
        padding: 10px;
        font-size: 1.1rem;
        font-weight: bold;

        &:hover {
            opacity: 0.9;
        }
    }
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