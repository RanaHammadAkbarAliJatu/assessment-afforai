import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1600px;
  margin: 160px auto;
  padding: 0 60px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 25pc;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const MainWrapper = styled.div`
  position: relative;
  overflow: hidden;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;

const MainContent = styled.div`
  padding-bottom: 240px;
  z-index: 2;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  gap: 24px;
  max-width: 1320px;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 36px;
  line-height: 100%;
  text-align: center;
  box-sizing: border-box;
`;

const Description = styled.div`
  color: rgb(82, 82, 82);
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  text-align: center;
  box-sizing: border-box;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 6px 28px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgb(96, 4, 255), rgb(127, 53, 255) 23.95%, rgb(55, 0, 151) 60.11%, rgb(141, 74, 255));
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgb(255, 255, 255);
  font-weight: 500;
  text-align: center;
  transition-duration: 0.2s;
  cursor: pointer;
  display: block;
  line-height: 24px;
  text-decoration: none solid rgb(255, 255, 255);
  transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s;
  user-select: none;
  vertical-align: middle;
  appearance: button;
  text-transform: none;
  margin: 0;
  box-sizing: border-box;

  &:hover {
    background-color: #0b5ed7;
    border-color: #0a58ca;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  width: 100%;
  border-radius: 28px;
  overflow: hidden;
  box-sizing: border-box;
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const StartSaving  = () => {
  return (
    <Container>
      <MainWrapper>
        <MainContent>
          <ContentWrapper>
            <Title>Start saving time today!</Title>
            <Description>Join an ever-growing community and get started with Afforai for free!</Description>
            <Button>Get Started for Free</Button>
          </ContentWrapper>
        </MainContent>
        <ImageContainer>
          <Image src="https://afforai.com/img/graphics/laptop-landing-16.png" alt="" />
        </ImageContainer>
      </MainWrapper>
    </Container>
  );
};

export default StartSaving
