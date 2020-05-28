import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const StyledBackgroundImage = styled(BackgroundImage)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledTitle = styled.h1`
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.bold};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1rem;
  /* max-width: 80%; */

  @media screen and (max-width: 812px) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    letter-spacing: 0.5rem;
  }

  @media screen and (max-width: 812px) and (orientation: landscape) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

const StyledDescription = styled.p`
  margin: 4rem auto;
  padding: 0 1rem;
  max-width: 540px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 1.5;

  @media screen and (max-width: 812px) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media screen and (max-width: 812px) and (orientation: landscape) {
    margin: 2rem auto;
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const Hero = () => {
  const { desktop } = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero_gradient.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  const imageData = desktop.childImageSharp.fluid;

  return (
    <StyledBackgroundImage Tag="section" fluid={imageData} role="img">
      <Navbar />
      <StyledContainer>
        <StyledTitle>Conceptive Finance</StyledTitle>
        <StyledDescription>
          Usługi księgowe, usługi kadrowo-płacowe, księgi handlowe, ryczałt, deklaracje, doradztwo,
          umowy{' '}
        </StyledDescription>
        <Button tertiary as={Link} to="#about">
          Dowiedz się więcej
        </Button>
      </StyledContainer>
    </StyledBackgroundImage>
  );
};

export default Hero;
