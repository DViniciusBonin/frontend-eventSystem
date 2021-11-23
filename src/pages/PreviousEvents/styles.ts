import styled from "styled-components";

export const Container = styled.div`
       background: #e8e8e8;

       .center {
           display: flex;
           justify-content: center;
       }

       .span {
           font-size: 1.3rem;
           display:flex;
           justify-content:center;
           flex-direction:column;
           text-align:center;
       }
`;

export const ListEvents = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
    background: white;
    padding: 0.8rem;
    padding-top: 100px;
    min-height: 100vh; 
`;