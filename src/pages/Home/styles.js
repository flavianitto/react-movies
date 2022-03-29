import styled from "styled-components";

export const Container = styled.div``;

export const Grid = styled.div`
    padding: 32px;
    max-width: 1200px;
    margin: 0 auto;    
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 60px;
`;