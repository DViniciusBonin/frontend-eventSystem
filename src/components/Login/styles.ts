import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    min-height: 100vh;

    form {
        display: flex;
        flex-direction: column;
        margin: auto;
        width: 100%;
        max-width: 400px;
    }

    form label {
        margin-top: 0.3rem;
        padding: 5px;
    }

    form input {
        outline: 0;
        border: 2px solid #ccc;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
    }

    button {
        margin-top: 1rem;
        border:0;
        background: #177efc;
        padding: 10px;
        border-radius: 5px;
        font-size: 1.1rem;
        font-weight: bold;
        color: #fff;
    }
`;