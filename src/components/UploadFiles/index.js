import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1600px;
  margin: 160px auto;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: 25pc;

  width: 100%;
  box-sizing: border-box;
`;

const SectionWrapper = styled.div`
  margin-bottom: 80px;
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

const FeatureBox = styled.div`
  box-sizing: border-box;
`;

const HighlightedText = styled.div`
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

const Title = styled.div`
  max-width: 636px;
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 36px;
  line-height: 130%;
  text-align: center;
  box-sizing: border-box;
`;

const Description = styled.div`
  max-width: 636px;
  color: rgb(82, 82, 82);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  box-sizing: border-box;
`;

const ImageWrapper = styled.div`
  margin: 0 auto;
  width: 75%;
  max-width: 640px;
  flex-shrink: 0;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const UploadFiles = () => (
  <Container>
    <SectionWrapper>
      <ContentContainer>
        <InnerContent>
          <FeatureBox>
            <HighlightedText>Seamless Integrations - Coming Soon</HighlightedText>
          </FeatureBox>
          <Title>Upload Files directly from Google Drive, One Drive & Dropbox</Title>
          <Description>
            Afforai allows you to upload files directly from Google Drive, One Drive & Dropbox, meaning your experience will be smooth sailing regardless of your preferred platform.
          </Description>
        </InnerContent>
      </ContentContainer>
      <ImageWrapper>
        <Image src="https://afforai.com/img/graphics/laptop-landing-15.png" alt="Upload Files directly from Google Drive, One Drive & Dropbox" />
      </ImageWrapper>
    </SectionWrapper>
  </Container>
);

export default UploadFiles;
