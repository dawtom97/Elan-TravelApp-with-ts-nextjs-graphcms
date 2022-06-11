import React from 'react';
import { HomeTemplateProps } from './HomeTemplate.types';
import * as Styled from './styles';
import banner1 from '../../../assets/elanBanner1.jpg';
import banner2 from '../../../assets/elanBanner2.jpg';
import banner3 from '../../../assets/elanBanner3.jpg';
import BannerSlogan from '../../organisms/BannerSlogan/BannerSlogan';
import { useBannerImage } from '../../../hooks/useBannerImage';

const images = [banner1,banner2,banner3]

export const HomeTemplate = ({ children }: HomeTemplateProps) => {
  const currentImage = useBannerImage(images)

  return (
    <Styled.Wrapper>
    
      <Styled.Banner image={images[currentImage]}>
        <BannerSlogan/>
      </Styled.Banner>
      <Styled.Content>
        {children}</Styled.Content>
    </Styled.Wrapper>
  );
};


