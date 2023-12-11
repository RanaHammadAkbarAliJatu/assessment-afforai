import styled from 'styled-components';

const Container = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
  margin-top: 25pc;

  box-sizing: border-box;
`;

const LeftColumn = styled.div`
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

const RightColumn = styled.div`
  padding-right: 48px;
  max-width: 1320px;
  padding-left: 16px;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 36px;
  line-height: 130%;
  margin-bottom: 16px;
  box-sizing: border-box;
`;

const Description = styled.div`
  color: rgb(82, 82, 82);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  margin-right: 48px;
  margin-bottom: 24px;
  box-sizing: border-box;
`;

const CheckList = styled.div`
  gap: 16px;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;

const CheckItem = styled.div`
  color: rgb(3, 204, 59);
  font-weight: 500;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`;

const CheckIcon = styled.img`
  margin-right: 16px;
  vertical-align: middle;
  box-sizing: border-box;
`;

const CheckText = styled.div`
  font-size: 16px;
  box-sizing: border-box;
`;

const ImageColumn = styled.div`
  margin-top: 0px;
  flex: 0 0 auto;
  width: 41.6667%;
  flex-shrink: 0;
  max-width: 100%;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
`;

const ResponsiveImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const SayGoodbye = () => {
  return (
    <Container>
      <LeftColumn>
        <RightColumn>
          <Title>Say goodbye to long, tiresome documents</Title>
          <Description>
            Afforai seamlessly translates documents, files, spreadsheets & websites, filtering out what you don’t need & answering your specific questions within seconds.
          </Description>
          <CheckList>
            <CheckItem>
              <CheckIcon src="https://afforai.com/img/icons/check-circle.svg" alt="checkmark" height="24" />
              <CheckText>A whip-smart research assistant</CheckText>
            </CheckItem>
            <CheckItem>
              <CheckIcon src="https://afforai.com/img/icons/check-circle.svg" alt="checkmark" height="24" />
              <CheckText>We speak every language</CheckText>
            </CheckItem>
            <CheckItem>
              <CheckIcon src="https://afforai.com/img/icons/check-circle.svg" alt="checkmark" height="24" />
              <CheckText>Reliable data citation for answers</CheckText>
            </CheckItem>
            <CheckItem>
              <CheckIcon src="https://afforai.com/img/icons/check-circle.svg" alt="checkmark" height="24" />
              <CheckText>Fort-Knox level data security</CheckText>
            </CheckItem>
          </CheckList>
        </RightColumn>
      </LeftColumn>
      <ImageColumn>
        <ResponsiveImage src="https://afforai.com/img/graphics/laptop-landing-4.png" alt="Afforai masters the documents you upload" />
      </ImageColumn>
    </Container>
  );
};

export default SayGoodbye;
