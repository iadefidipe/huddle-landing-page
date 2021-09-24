import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div, & > ul {
        flex: 1;
        
    } 

    & > div *{
        margin-bottom: 10px;
    }

    @media (max-width: ${ ({theme}) => theme.tablet  }){
        flex-direction: column;
        text-align: center;
        gap: 20px;
        
    }
`


