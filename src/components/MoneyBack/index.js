import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  margin-top: 25pc;
  box-sizing: border-box;
`;

const LeftColumn = styled.div`
  margin-left: 119.328px;
  flex: 0 0 auto;
  width: 50%;
  flex-shrink: 0;
  margin-top: 0;
  max-width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
`;

const RightColumn = styled.div`
  gap: 24px;
  padding-right: 48px;
  max-width: 1320px;
  padding-left: 16px;
  flex-direction: column;
  display: flex;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;
`;

const PromiseContainer = styled.div`
  box-sizing: border-box;
`;

const GuaranteeText = styled.div`
  padding: 6px 16px;
  border-radius: 8px;
  background: rgb(250, 250, 250);
  border: 2px solid rgb(128, 54, 255);
  color: rgb(128, 54, 255);
  font-size: 13px;
  align-items: flex-start;
  justify-content: center;
  display: inline-flex;
  box-sizing: border-box;
`;

const Title = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 36px;
  line-height: 130%;
  padding-right: 48px;
  box-sizing: border-box;
`;

const Description = styled.div`
  color: rgb(82, 82, 82);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  padding-right: 16px;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  padding-left: 3%;
  padding-right: 3%;
  padding-right: 42.9531px;
  margin-top: 0;
  flex: 0 0 auto;
  width: 33.3333%;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  max-width: 100%;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const MoneyBack = () => {
  return (
    <Container>
      <LeftColumn>
        <RightColumn>
          <PromiseContainer>
            <GuaranteeText>My promise to you</GuaranteeText>
          </PromiseContainer>
          <Title>100% money back guaranteed if you are not satisfied</Title>
          <Description>
            We crafted Afforai with total belief in our ability to make a chatbot that is not only powerful and reliable but also able to maximize your satisfaction as a user. This is why we have implemented a money-back guarantee if you find yourself not satisfied with the capabilities of Afforai.
          </Description>
        </RightColumn>
      </LeftColumn>
      <ImageContainer>
        <Image src="https://afforai.com/img/graphics/laptop-landing-20.png" alt="100% money back guarantee" />
      </ImageContainer>
    </Container>
  );
};

export default MoneyBack;
