import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  margin-top: 25pc;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  margin-left: 119.328px;
  flex: 0 0 auto;
  width: 41.6667%;
  justify-content: center;
  flex-direction: column;
  display: flex;
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

const ImageContainer = styled.div`
  padding-right: 32px;
  flex: 0 0 auto;
  width: 50%;
  flex-shrink: 0;
  margin-top: 0px;
  max-width: 100%;
  padding-left: 12px;
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

const Regardless = () => {
  return (
    <MainContainer>
      <TextContainer>
        <InnerContainer>
          <Title>Multiple Language Supported</Title>
          <Heading>Regardless of where you are from, Afforai is for you</Heading>
          <Description>
            We support more than 100 Languages, meaning you can seamlessly use our services regardless of where you are from. Our Cross Language Querying feature also allows flawless translation of documents.
          </Description>
        </InnerContainer>
      </TextContainer>
      <ImageContainer>
        <StyledPicture>
          <source srcSet="https://afforai.com/img/graphics/laptop-landing-13.png" type="image/webp" />
          <StyledImage src="https://afforai.com/img/graphics/laptop-landing-13.png" alt="Afforai supports over 100 languages and allows users to upload and ask questions in most languages" />
        </StyledPicture>
      </ImageContainer>
    </MainContainer>
  );
};

export default Regardless;
