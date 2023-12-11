import styled from 'styled-components';

const MainContainer = styled.div`
  margin-top: 25pc;
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  box-sizing: border-box;
`;

const ContentContainer = styled.div`
  padding-right: 48px;
  margin-left: 119.328px;
  flex: 0 0 auto;
  width: 41.6667%;
  padding-left: 0px;
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex-shrink: 0;
  margin-top: 0px;
  max-width: 100%;
  box-sizing: border-box;
`;

const InnerContainer = styled.div`
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

const SubContainer = styled.div`
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
  display: inline-flex;
  box-sizing: border-box;
`;

const Heading = styled.div`
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

const ButtonContainer = styled.div`
  gap: 24px;
  align-content: center;
  flex-shrink: 1;
  flex-direction: row;
  display: flex;
  box-sizing: border-box;
`;

const StyledButton = styled.button`
  font-size: 16px;
  padding: 6px 28px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(96, 4, 255), rgb(127, 53, 255) 23.95%, rgb(55, 0, 151) 60.11%, rgb(141, 74, 255)) repeat scroll 0% 0% / auto padding-box border-box;
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
  margin: 0px;
  box-sizing: border-box;
`;

const SecondaryButton = styled.button`
  font-size: 16px;
  padding: 6px 28px;
  border-radius: 12px;
  background-color: rgb(245, 245, 245);
  border-color: rgb(230, 230, 230);
  color: rgb(82, 82, 82);
  font-weight: 500;
  text-align: center;
  transition-duration: 0.2s;
  border: 1px solid rgb(230, 230, 230);
  cursor: pointer;
  display: block;
  line-height: 24px;
  text-decoration: none solid rgb(82, 82, 82);
  transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s;
  user-select: none;
  vertical-align: middle;
  appearance: button;
  text-transform: none;
  margin: 0px;
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  margin-top: 0px;
  flex: 0 0 auto;
  width: 41.6667%;
  flex-shrink: 0;
  max-width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const CreateMultipleChatbots = () => {
  return (
    <MainContainer>
      <ContentContainer>
        <InnerContainer>
          <SubContainer>
            <Title>Most versatile</Title>
          </SubContainer>
          <Heading>Create multiple chatbots for different purposes</Heading>
          <Description>
            Legal documents? Summarising a book? Extracting data from a website? We allow you to create multiple chatbots at one time, so you can use Afforai for a whole range of purposes.
          </Description>
          <ButtonContainer>
            <StyledButton>Get started</StyledButton>
            <SecondaryButton>View pricing</SecondaryButton>
          </ButtonContainer>
        </InnerContainer>
      </ContentContainer>
      <ImageContainer>
        <picture>
          <source srcset="https://afforai.com/img/graphics/laptop-landing-11.png" type="image/webp" />
          <StyledImage src="https://afforai.com/img/graphics/laptop-landing-11.png" alt="Afforai masters the documents you upload" />
        </picture>
      </ImageContainer>
    </MainContainer>
  );
};

export default CreateMultipleChatbots;
