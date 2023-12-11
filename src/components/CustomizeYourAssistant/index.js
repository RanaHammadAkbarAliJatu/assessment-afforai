import styled from 'styled-components';

const MainContainer = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  margin-top: 25pc;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  margin-left: 119.328px;
  flex: 0 0 auto;
  width: 33.3333%;
  align-items: center;
  display: flex;
  flex-shrink: 0;
  margin-top: 0px;
  max-width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
`;

const StyledPicture = styled.picture`
  box-sizing: border-box;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  margin-left: 119.328px;
  flex: 0 0 auto;
  width: 50%;
  flex-shrink: 0;
  margin-top: 0px;
  max-width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
  gap: 24px;
  max-width: 1320px;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.div`
  padding: 6px 16px;
  border-radius: 8px;
  background: rgb(250, 250, 250);
  border: 2px solid rgb(128, 54, 255);
  color: rgb(128, 54, 255);
  font-size: 13px;
  align-items: center;
  justify-content: center;
  display: flex;
  box-sizing: border-box;
`;

const Heading = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 36px;
  line-height: 130%;
  padding-right: 48px;
  margin-right: 24px;
  box-sizing: border-box;
`;

const Description = styled.div`
  color: rgb(82, 82, 82);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  padding-right: 48px;
  margin-right: 16px;
  box-sizing: border-box;
`;

const ModesContainer = styled.div`
  padding-right: 48px;
  margin-right: 16px;
  gap: 24px;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;

const ModeGroup = styled.div`
  gap: 16px;
  display: flex;
  box-sizing: border-box;
`;

const ModeIcon = styled.img`
  height: 24px;
  box-sizing: border-box;
`;

const ModeInfoContainer = styled.div`
  gap: 8px;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;

const ModeTitle = styled.div`
  font-size: 16px;
  color: rgb(58, 2, 153);
  font-weight: 500;
  box-sizing: border-box;
`;

const ModeDetails = styled.div`
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  background: rgb(239, 230, 255);
  color: rgb(96, 4, 255);
  font-size: 14px;
  font-weight: 500;
  height: 18px;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`;

const Credits = styled.div`
  font-size: 14px;
  color: rgb(38, 2, 102);
  box-sizing: border-box;
`;

const CustomizeYourAssistant = () => {
  return (
    <MainContainer>
      <ImageContainer>
        <StyledPicture>
          <source srcset="https://afforai.com/img/graphics/laptop-landing-12.png" type="image/webp" />
          <StyledImage src="https://afforai.com/img/graphics/laptop-landing-12.png" alt="Afforai supports questions answer with Google and Deep Document Search" />
        </StyledPicture>
      </ImageContainer>
      <ContentContainer>
        <InnerContainer>
          <Title>Different Modes Available</Title>
          <Heading>Customize your assistant with a range of different modes</Heading>
          <Description>
            Further power your questions with additional modes. Afforai allows you to switch between three different modes, each which has unique ways of utilizing our AI tools to answer your question(s).
          </Description>
          <ModesContainer>
            <ModeGroup>
              <ModeIcon src="https://afforai.com/img/icons/fast-forward.svg" alt="fast mode" />
              <ModeInfoContainer>
                <ModeTitle>Fast Mode (default)</ModeTitle>
                <ModeDetails>
                  1 credit
                </ModeDetails>
                <Description>
                  Quickly ask a question and receive an answer from the AI. This mode is most suited for applications that require only a small part of the documents to be scanned (ex. FAQ Chatbot, Search).
                </Description>
              </ModeInfoContainer>
            </ModeGroup>
            <ModeGroup>
              <ModeIcon src="https://afforai.com/img/icons/power-off.svg" alt="powerful mode" />
              <ModeInfoContainer>
                <ModeTitle>Powerful Mode</ModeTitle>
                <ModeDetails>
                  4 credits
                </ModeDetails>
                <Description>
                  Get answers of extra high quality from the AI. This mode is most suited for applications that require inferences as well as the full documents to be scanned (ex. Textual Data Analysis, Search with Inference, Report Generation).
                </Description>
              </ModeInfoContainer>
            </ModeGroup>
            <ModeGroup>
              <ModeIcon src="https://afforai.com/img/icons/search-plus.svg" alt="google search mode" />
              <ModeInfoContainer>
                <ModeTitle>Google Mode</ModeTitle>
                <ModeDetails>
                  5 credits
                </ModeDetails>
                <Description>
                  Supplement your answers with the top 3 results from Google Search. This adds extra reliability to back up our already incredibly accurate answers.
                </Description>
              </ModeInfoContainer>
            </ModeGroup>
          </ModesContainer>
        </InnerContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default CustomizeYourAssistant;
