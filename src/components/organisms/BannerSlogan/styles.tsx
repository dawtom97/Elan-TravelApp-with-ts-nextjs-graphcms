import styled from 'styled-components';

export const Wrapper = styled.div`

    &  h2, & h3 {
        color:${({theme}) => theme.white}
    }

`;

export const ButtonWrapper = styled.span`
    display: flex;
    align-items: center;
    gap:25px;
    & svg {
        color:${({theme}) => theme.white};
        font-size: 4rem;
    }
`