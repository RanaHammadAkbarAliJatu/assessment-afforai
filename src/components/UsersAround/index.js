import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1600px;
  margin: 100px auto 128px;
  gap: 24px;
  margin-top: 25pc;

  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;

const StyledText = styled.div`
  color: rgb(82, 82, 82);
  font-size: 16px;
  text-align: center;
  box-sizing: border-box;
`;

const StyledSpan = styled.span`
  color: rgb(128, 54, 255);
  box-sizing: border-box;
`;

const StyledImage = styled.img`
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const UsersAround = () => {
  return (
    <StyledContainer>
      <StyledText>Loved by <StyledSpan>20,000+</StyledSpan> users around the world</StyledText>
      <StyledImage src="https://afforai.com/img/graphics/laptop-landing-2.png" alt="users" width="336" height="48" />
    </StyledContainer>
  );
};

export default UsersAround;
