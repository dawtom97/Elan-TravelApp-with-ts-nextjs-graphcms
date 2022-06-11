import React from 'react';
import * as Styled from './styles';
import { RiMenuAddFill } from 'react-icons/ri';
import { SiYourtraveldottv } from 'react-icons/si';
import { NavText } from '../../atoms/NavText';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <Styled.Wrapper>
      <RiMenuAddFill />
      <ul>
        <Link href='/'>
          <NavText>Home</NavText>
        </Link>
        <Link href='/'>
          <NavText>About</NavText>
        </Link>
        <Link href='/'>
          <NavText>Blog</NavText>
        </Link>
        <Link href='/'>
          <NavText>Contact</NavText>
        </Link>
      </ul>
      <SiYourtraveldottv />
    </Styled.Wrapper>
  );
};
