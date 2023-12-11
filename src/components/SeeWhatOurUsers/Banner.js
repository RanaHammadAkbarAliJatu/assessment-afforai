import React from "react";
import styled, { keyframes } from "styled-components";

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
      height: 16pc;
    margin-top: 2pc;
`;


const InnerContainer = styled.div`
  position: relative;
  width: 90pc;
    height: 18rem;
    overflow: hidden;
`;

const Wrapper = styled.div`
  position: absolute;
  display: flex;
`;
const SectionLeft = styled.section`
  display: flex;
  flex-direction: row-reverse; /* Change direction to reverse */
  animation: ${keyframes`
    0% {
      transform: translate(-100%); 
    }

    100% {
      transform: translate(0)
    }
  `} var(--speed) linear infinite backwards;
`;
const SectionRight = styled.section`
  display: flex;
  animation: ${keyframes`
    0% {
      transform: translate(0);
    }

    100% {
      transform: translate(-100%);
    }
  `} var(--speed) linear infinite backwards;
`;

const TestimonialContainer = styled.div`
  display: inline-block;
  margin-right: 20px;
  margin-right: 20px;
  box-sizing: border-box;
`;

const TestimonialContent = styled.div`
  width: 600px;
  height: 266px;
  padding: 32px;
  border: 1px solid rgb(230, 230, 230);
  height: 266px;
  padding: 32px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 8px;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;

const TestimonialText = styled.div`
  color: rgb(34, 34, 34);
  font-size: 16px;
  border-bottom: 1px solid rgb(230, 230, 230);
  font-size: 16px;
  border-bottom: 1px solid rgb(230, 230, 230);
  white-space: normal;
  align-items: start;
  flex-grow: 1;
  box-sizing: border-box;
`;

const TestimonialInfo = styled.div`
  padding-top: 24px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  box-sizing: border-box;
`;

const InfoWrapper = styled.div`
  gap: 8px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`;

const TestimonialImage = styled.picture`
  box-sizing: border-box;
`;

const ImageSource = styled.source`
  box-sizing: border-box;
`;

const UserImage = styled.img`
  height: 32px;
  width: 32px;
  width: 32px;
  max-width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const UserName = styled.div`
  color: rgb(82, 82, 82);
  font-size: 14px;
  font-size: 14px;
  box-sizing: border-box;
`;

const ProductHuntLink = styled.a`
  background: rgb(246, 232, 229);
  border: 1px solid rgb(255, 60, 5);
  border: 1px solid rgb(255, 60, 5);
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  outline: rgb(13, 110, 253) none 0px;
  text-decoration: none solid rgb(13, 110, 253);
  border-radius: 8px;
  padding-bottom: 4px;
  padding-top: 4px;
  align-items: center;
  color: rgb(13, 110, 253);
  box-sizing: border-box;
`;

const ProductHuntIcon = styled.div`
  gap: 4px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`;

const ProductHuntLogo = styled.img`
  vertical-align: middle;
  box-sizing: border-box;
`;

const ViewOnProductHunt = styled.span`
      color: rgb(255, 58, 2);
    font-size: 12px;
    font-weight: 500;
`;

const Banner = ({ Users, isLeft,speed }) => {
    const Section = isLeft ? SectionLeft: SectionRight
  return (
    <AppContainer>
      <InnerContainer>
        <Wrapper>
            <Section isLeft={isLeft} style={{ "--speed": `${speed}ms` }}>
              {Users.map(({ id, image ,name,quote,url}) => (
                  <TestimonialContainer>
                    <TestimonialContent>
                      <TestimonialText>{quote}</TestimonialText>
                      <TestimonialInfo>
                        <InfoWrapper>
                          <TestimonialImage>
                            <ImageSource
                              srcSet={image}
                              type="image/webp"
                            />
                            <UserImage
                              src={image}
                              alt="Thuy Nguyen, CEO Assistance"
                            />
                          </TestimonialImage>
                          <UserName>{name}</UserName>
                        </InfoWrapper>
                        <ProductHuntLink
                          href={url}
                          target="_blank"
                        >
                          <ProductHuntIcon>
                            <ProductHuntLogo
                              src={"https://afforai.com/img/icons/producthunt.svg"}
                              alt="Product Hunt logo"
                              height="16"
                            />
                            <ViewOnProductHunt>
                              View on Product Hunt
                            </ViewOnProductHunt>
                          </ProductHuntIcon>
                        </ProductHuntLink>
                      </TestimonialInfo>
                    </TestimonialContent>
                  </TestimonialContainer>
              ))}
            </Section>
        </Wrapper>
      </InnerContainer>
    </AppContainer>
  );
};

export default Banner;
