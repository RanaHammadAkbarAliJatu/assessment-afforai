import styled from 'styled-components';

const Container = styled.div`
  gap: 24px;
  margin-top: 25pc;

  max-width: 1320px;
  align-items: center;
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

const CallToAction = styled.div`
  box-sizing: border-box;
`;

const Button = styled.div`
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
  max-width: 556px;
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 36px;
  line-height: 130%;
  text-align: center;
  box-sizing: border-box;
`;

const Subtitle = styled.div`
  max-width: 556px;
  color: rgb(82, 82, 82);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  box-sizing: border-box;
`;
const StyledContainer = styled.div`
  max-width: 1600px;
  margin: 100px auto 128px;
  gap: 24px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;
const ImageContainer = styled.div`
  height: auto;
  max-width: 80%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const Image = styled.img`
  width: 100%;
`;
const YourProductivity = () => {
  return (
    <>
    <Container>
      <CallToAction>
        <Button>10x your productivity</Button>
      </CallToAction>
      <Title>Save yourself from stress & streamline your workflow</Title>
      <Subtitle>
        The average worker spends 9 hours per week looking through & gathering information from thick stacks of documents. With Afforai, you can save yourself 8 hours per week (plus a lot of headaches).
      </Subtitle>
    </Container>
    <StyledContainer>

        <ImageContainer>
        <Image src="https://afforai.com/img/graphics/laptop-landing-5.png" alt="Laptop Landing" />
      </ImageContainer>
    </StyledContainer>
      </>
  );
};

export default YourProductivity;
