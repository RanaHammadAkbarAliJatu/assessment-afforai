import styled from 'styled-components';

const Container = styled.div`
  flex-direction: row-reverse;
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  margin-top: 25pc;
  box-sizing: border-box;
`;

const LeftColumn = styled.div`
  margin-right: 5.5555%;
  flex: 0 0 auto;
  width: 41.6667%;
  flex-shrink: 0;
  margin-top: 0;
  max-width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
`;

const FeatureBox = styled.div`
  margin-bottom: 24px;
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
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 36px;
  line-height: 130%;
  margin-bottom: 24px;
  max-width: 482px;
  box-sizing: border-box;
`;

const Description = styled.div`
  color: rgb(82, 82, 82);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  margin-bottom: 24px;
  max-width: 482px;
  box-sizing: border-box;
`;

const RightColumn = styled.div`
  margin: 0 5.5555%;
  flex: 0 0 auto;
  width: 41.6667%;
  justify-content: center;
  flex-direction: column;
  display: flex;
  flex-shrink: 0;
  margin-top: 0;
  max-width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const FileWizard = () => (
  <Container>
    <LeftColumn>
      <FeatureBox>
        <HighlightedText>Get more out of your files</HighlightedText>
      </FeatureBox>
      <Title>File Wizard - a game-changing new feature</Title>
      <Description>
        Convert your files with less effort than ever. Afforai’s File Wizard feature allows you to transform your files in limitless different ways. We can translate, summarize, or explain your upload in no time.
      </Description>
    </LeftColumn>
    <RightColumn>
      <Image src="https://afforai.com/img/graphics/laptop-landing-14.png" alt="Translate, convert, summarize your files with File Wizard" />
    </RightColumn>
  </Container>
);

export default FileWizard;
