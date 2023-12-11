import styled from 'styled-components';

const Container = styled.div`
  max-width: 1264px;
  padding: 32px;
  border: 1px solid rgb(230, 230, 230);
  border-radius: 16px;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-grow: 1;
  display: flex;
  box-sizing: border-box;
`;

const Column = styled.div`
  gap: 24px;
  flex-basis: 235px;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;

  &:last-child {
    margin-bottom: 24px;
  }
`;

const LogoWrapper = styled.div`
  gap: 8px;
  display: flex;
  box-sizing: border-box;
`;

const LogoImage = styled.img`
  height: 24px;
  width: 24px;
  vertical-align: middle;
  box-sizing: border-box;
`;

const AfforaiTitle = styled.div`
  color: rgb(17, 17, 17);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  height: 24px;
  box-sizing: border-box;
`;

const Description = styled.div`
  color: rgb(82, 82, 82);
  font-size: 13px;
  box-sizing: border-box;
`;

const Copyright = styled.div`
  color: rgb(82, 82, 82);
  font-size: 13px;
  box-sizing: border-box;
`;

const BackedBy = styled.div`
  gap: 8px;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;

const BackedByText = styled.div`
  color: rgb(17, 17, 17);
  font-weight: 500;
  font-size: 16px;
  box-sizing: border-box;
`;

const BackedByLogo = styled.img`
  height: 46px;
  width: 137px;
  box-sizing: border-box;
`;

const LinkButton = styled.a`
  outline: rgb(13, 110, 253) none 0px;
  text-decoration: none solid rgb(13, 110, 253);
  color: rgb(13, 110, 253);
  box-sizing: border-box;

  &:hover {
    text-decoration: underline;
  }
`;

const FollowUsLink = styled(LinkButton)`
  cursor: pointer;
  color: rgb(82, 82, 82);
  font-size: 13px;
`;

const LanguageOption = styled.div`
  color: rgb(82, 82, 82);
  font-size: 12px;
  cursor: pointer;
  box-sizing: border-box;
`;
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
const App = () => (
  <StyledContainer>
  <Container>
    <Column>
      <LogoWrapper>
        <LogoImage src="https://afforai.com/img/graphics/logo-new-violet.png" alt="Afforai Logo" />
        <AfforaiTitle>Afforai</AfforaiTitle>
      </LogoWrapper>
      <Description>
        Afforai is your research tool into damn near anything. Helping you summarise, translate, and withdraw data from documents.
      </Description>
      <Copyright>Copyright © 2023 Afforai Inc. All rights reserved.</Copyright>
      <LinkButton href="https://www.producthunt.com/posts/afforai?utm_source=badge-top-post-badge&amp;utm_medium=badge&amp;utm_souce=badge-afforai">
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=403202&amp;theme=light&amp;period=daily"
          alt="Afforai - Summarize, interact, translate your documents with AI | Product Hunt"
          width="195"
          height="42"
        />
      </LinkButton>
      <div>
        <BackedBy>
          <BackedByText>Backed by</BackedByText>
          <BackedByLogo src="https://afforai.com/img/logos/sputnikatx.png" alt="Sputnik ATX VC" />
        </BackedBy>
      </div>
    </Column>
    <Column>
        <div>Company</div>
        <FollowUsLink href="/our_story">
          <div>Our Story</div>
        </FollowUsLink>
        <FollowUsLink href="https://afforai.getrewardful.com/signup" target="_blank">
          <div>Affiliate</div>
        </FollowUsLink>
        <FollowUsLink href="/security">
          <div>Security</div>
        </FollowUsLink>
        <FollowUsLink href="https://trello.com/b/98yNMfwA/afforai-roadmap" target="_blank">
          <div>Roadmap</div>
        </FollowUsLink>
        <FollowUsLink href="/contact">
          <div>Contact Us</div>
        </FollowUsLink>
    </Column>
    <Column>
        <div>Resources</div>
        <FollowUsLink href="https://help.afforai.com/" target="_blank">
          <div>Help Center</div>
        </FollowUsLink>
        <FollowUsLink href="/documentation">
          <div>API Docs</div>
        </FollowUsLink>
        <FollowUsLink href="/terms_of_use">
          <div>Terms of Use</div>
        </FollowUsLink>
        <FollowUsLink href="/privacy_policy">
          <div>Privacy Policy</div>
        </FollowUsLink>
    </Column>
    <Column>
        <div>Follow Us</div>
        <FollowUsLink href="https://www.facebook.com/groups/afforai" target="_blank">
          <div>Facebook Group</div>
        </FollowUsLink>
        <FollowUsLink href="https://linkedin.com/company/afforai/" target="_blank">
          <div>LinkedIn</div>
        </FollowUsLink>
        <FollowUsLink href="https://twitter.com/afforai/" target="_blank">
          <div>Twitter</div>
        </FollowUsLink>
        <FollowUsLink href="https://medium.com/@alec-afforai" target="_blank">
          <div>Medium Blog</div>
        </FollowUsLink>
    </Column>
  </Container>
  </StyledContainer>
);

export default App;
