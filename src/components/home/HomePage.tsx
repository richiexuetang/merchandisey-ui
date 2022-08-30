import * as Styled from './Homepage.styles';
import { Container } from '@chakra-ui/react';
import { Navbar } from '../navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { ProductRow } from '../product-row';
import { ImageSlider } from '../image-slider';
import { Footer } from '../footer';

const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Styled.MainSection>
        <ImageSlider />
        <Styled.SectionWrapper>
          <Container
            w='100%'
            marginInlineStart='auto'
            marginInlineEnd='auto'
            maxWidth='1296px'
            paddingInlineStart='1rem'
            paddingInlineEnd='1rem'
          >
            <ProductRow />
          </Container>
        </Styled.SectionWrapper>
      </Styled.MainSection>
      <Footer />
      <Outlet />
    </React.Fragment>
  );
};
export default HomePage;
