import styled from 'styled-components';



export const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  border-radius: 5px;
  border:none;
  color:${props=>props.theme.white};
  font-size: 1.6rem;
  width:145px;
  height: 40px;
  transition: background-color 0.3s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.primaryAlt};
  }
`;
