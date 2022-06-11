import styled from 'styled-components';

export const Wrapper = styled.nav`
   display: flex;
   align-items: center;
   justify-content: space-between;

   & > svg {
    font-size: 3rem;
    cursor: pointer;
    color: ${({theme})=>theme.primary}
   }

`