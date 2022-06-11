import React from 'react';
import { Button } from '../../atoms/Button';
import { Heading } from '../../molecules/Heading/Heading';
import * as Styled from './styles';
import { BsArrowRightCircle } from 'react-icons/bs';

const BannerSlogan = () => {
  return (
    <Styled.Wrapper>
      <Heading
        title='Explore Beautiful world with loved one'
        subtitle='the natural richness and cultuar dicresity of indonesia'
      >
        <Styled.ButtonWrapper>
          <Button>Explore</Button>
          <BsArrowRightCircle />
        </Styled.ButtonWrapper>
      </Heading>
    </Styled.Wrapper>
  );
};

export default BannerSlogan;
