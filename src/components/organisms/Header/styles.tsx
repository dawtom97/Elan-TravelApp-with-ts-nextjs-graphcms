import styled from 'styled-components';

export const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 25px;
  & > input {
    margin-top: 20px;
  }

  @media screen and (min-width: 992px) {
    position: relative;
    padding: 0;
    & > input {
      margin-top: 30px;
    }
  }
`;
