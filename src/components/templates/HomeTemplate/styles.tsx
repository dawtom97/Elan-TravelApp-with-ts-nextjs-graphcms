import styled from 'styled-components';
import { StylesProps } from './HomeTemplate.types';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 200vh;

  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const Banner = styled.div<StylesProps>`
  background:linear-gradient( rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.4) 80%), url(${({ image }) => image.src});
  background-position: center;
  background-size: cover;
  padding: 25px;
  width: 100%;
  display: flex;
  align-items: center;
  height: 500px;
  @media screen and (min-width: 992px) {
    width:40%;
    position: fixed;
    min-height: 100vh;
  }
`;
export const Content = styled.section`
  padding: 25px;
  @media screen and (min-width: 992px) {
    flex: 1;
    margin-left:40%;
  }
`;
