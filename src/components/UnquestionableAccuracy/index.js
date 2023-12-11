import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1600px;
  margin: 160px auto;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
  margin-top: 25pc;
  box-sizing: border-box;
`;

const SectionWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  margin-top: 0;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex: 1 0 0%;
  flex-shrink: 0;
  margin-top: 0;
  max-width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const InnerContent = styled.div`
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
  line-height: 130%;
  text-align: center;
  box-sizing: border-box;
`;

const Description = styled.div`
  max-width: 500px;
  color: rgb(82, 82, 82);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  margin-top: 5px;
  margin-bottom: 3pc;
  text-align: center;
  box-sizing: border-box;
`;

const FeatureContainer = styled.div`
  padding-left: 8.3333%;
  padding-right: 8.3333%;
  padding-right: 117.328px;
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  margin-top: 0;
  box-sizing: border-box;
`;

const FeatureColumn = styled.div`
  padding-right: 0.5rem;
  flex: 0 0 auto;
  width: 33.3333%;
  flex-shrink: 0;
  margin-top: 0;
  max-width: 100%;
  padding-left: 12px;
  box-sizing: border-box;
`;

const FeatureBox = styled.div`
  border: 1px solid rgb(230, 230, 230);
  overflow: hidden;
  border-radius: 16px;
  flex-direction: column;
  height: 310.352px;
  display: flex;
  box-sizing: border-box;
`;

const FeatureImageContainer = styled.div`
  background: rgb(245, 245, 245);
  border-bottom: 1px solid rgb(230, 230, 230);
  box-sizing: border-box;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const FeatureDescriptionContainer = styled.div`
  padding-bottom: 24px;
  padding-top: 8px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;

const FeatureTextGroup = styled.div`
  gap: 8px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`;

const FeatureTextTitle = styled.span`
  font-size: 16px;
  color: rgb(34, 34, 34);
  font-weight: 500;
  box-sizing: border-box;
`;

const FeatureTextDescription = styled.div`
  font-size: 12px;
  color: rgb(82, 82, 82);
  box-sizing: border-box;
`;

const StyledComponent = () => (
  <Container>
    <SectionWrapper>
      <ContentContainer>
        <InnerContent>
          <Title>Unquestionable accuracy & reliability</Title>
          <Description>We pride ourselves on the quality of our chatbot’s responses, and go the extra mile to ensure the accuracy & reliability of our answers.</Description>
        </InnerContent>
      </ContentContainer>
      <FeatureContainer>
        <FeatureColumn>
          <FeatureBox>
            <FeatureImageContainer>
              <FeatureImage src="https://afforai.com/img/graphics/laptop-landing-17.png" alt="Security, Reliable, and Trustworthy" />
            </FeatureImageContainer>
            <FeatureDescriptionContainer>
              <FeatureTextGroup>
                <FeatureTextTitle>Trusted by users all over the World</FeatureTextTitle>
              </FeatureTextGroup>
              <FeatureTextDescription>Afforai is used all around the World, saving thousands of people time and money with our speed & accuracy.</FeatureTextDescription>
            </FeatureDescriptionContainer>
          </FeatureBox>
        </FeatureColumn>
        <FeatureColumn>
          <FeatureBox>
            <FeatureImageContainer>
              <FeatureImage src="https://afforai.com/img/graphics/laptop-landing-18.png" alt="Afforai gives out the best answer with most accurate citations" />
            </FeatureImageContainer>
            <FeatureDescriptionContainer>
              <FeatureTextGroup>
                <FeatureTextTitle>Information filtering</FeatureTextTitle>
              </FeatureTextGroup>
              <FeatureTextDescription>Afforai gives you the highest quality answers and filters out any irrelevant information.</FeatureTextDescription>
            </FeatureDescriptionContainer>
          </FeatureBox>
        </FeatureColumn>
        <FeatureColumn>
          <FeatureBox>
            <FeatureImageContainer>
              <FeatureImage src="https://afforai.com/img/graphics/laptop-landing-19.png" alt="Afforai AI comprehends documents, not repeating them" />
            </FeatureImageContainer>
            <FeatureDescriptionContainer>
              <FeatureTextGroup>
                <FeatureTextTitle>Built-in Comprehension Model</FeatureTextTitle>
              </FeatureTextGroup>
              <FeatureTextDescription>Our powerful comprehension model increases the power of our data retrieval.</FeatureTextDescription>
            </FeatureDescriptionContainer>
          </FeatureBox>
        </FeatureColumn>
      </FeatureContainer>
    </SectionWrapper>
  </Container>
);

export default StyledComponent;
