import styled from 'styled-components';


export const CardContainer = styled.div`
    display: flex;
    height: 400px;
    flex-direction: column;
    background-color: #28b7fa;
    border: 1px solid aqua;
    border-radius: 5px;
    cursor: pointer;
    -moz-osx-font-smoothing:grayscale;
    backface-visibility: hidden;
    transform:translateZ(0);
    transition:transform .3s ease-out;
    &:hover{
        transform:scale(1.05);
    }
    @media screen and (max-width:600){
        display: block;
        width: 80%;
        max-width: 200px;

    }
`;