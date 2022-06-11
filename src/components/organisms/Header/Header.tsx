import React from 'react';
import { Input } from '../../atoms/Input';
import { Navbar } from '../../molecules/Navbar/Navbar';
import * as Styled from './styles';

export const Header = () => {
  return (
    <Styled.Wrapper>
        <Navbar/>
        <Input type="search" placeholder='Search'/>
    </Styled.Wrapper>
  )
}
