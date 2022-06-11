import React from 'react';
import { Subtitle } from '../../atoms/Subtitle';
import { Title } from '../../atoms/Title';
import { HeadingProps } from './Heading.types';
import * as Styled from './styles';

export const Heading = ({title,subtitle,children}:HeadingProps) => {
  return (
    <Styled.Wrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        {children}
          
    </Styled.Wrapper>
  )
}

