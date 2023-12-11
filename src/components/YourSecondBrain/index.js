import styled from 'styled-components';

const MainContainer = styled.div`
  gap: 32px;
  line-height: 100%;
  margin-top: 7pc;
  z-index: 2;
  line-height: 16px;
  z-index: 2;
  align-items: center;
  flex-direction: column;
  display: flex;
  box-sizing: border-box;
`;

const AppSumoContainer = styled.div`
  padding: 6px 6px 6px 10px;
  gap: 6px;
  border-radius: 12px;
  border: 2px solid rgb(51, 51, 51);
  background: linear-gradient(269deg, rgb(255, 185, 1) 17.08%, rgb(255, 149, 1) 100%);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.09) 0px 2px 2px 0px, rgba(0, 0, 0, 0.05) 0px 5px 3px 0px,
    rgba(0, 0, 0, 0.01) 0px 9px 4px 0px, rgba(0, 0, 0, 0) 0px 14px 4px 0px;
  backdrop-filter: blur(28px);
  color: rgb(51, 51, 51);
  font-size: 13px;
  line-height: 100%;
  font-weight: 600;
  gap: 6px;
  border-radius: 12px;
  border: 2px solid rgb(51, 51, 51);
  background: rgba(0, 0, 0, 0)
    linear-gradient(269deg, rgb(255, 185, 1) 17.08%, rgb(255, 149, 1) 100%)
    repeat scroll 0% 0% / auto padding-box border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px 0px, rgba(0, 0, 0, 0.09) 0px 2px 2px 0px, rgba(0, 0, 0, 0.05) 0px 5px 3px 0px,
    rgba(0, 0, 0, 0.01) 0px 9px 4px 0px, rgba(0, 0, 0, 0) 0px 14px 4px 0px;
  backdrop-filter: blur(28px);
  color: rgb(51, 51, 51);
  font-size: 13px;
  line-height: 13px;
  font-weight: 600;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`;

const AppSumoImage = styled.img`
  vertical-align: middle;
  box-sizing: border-box;
`;

const AppSumoText = styled.span`
  box-sizing: border-box;
`;

const AppSumoLink = styled.a`
  padding: 6px 2px 6px 6px;
  gap: 2px;
  border-radius: 6px;
  border: 1px solid rgb(51, 51, 51);
  color: inherit;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.5) 50.04%,
    rgba(255, 255, 255, 0.5) 50.85%
  );
  gap: 2px;
  border-radius: 6px;
  border: 1px solid rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  background: rgba(0, 0, 0, 0)
    linear-gradient(
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.5) 50.04%,
      rgba(255, 255, 255, 0.5) 50.85%
    )
    repeat scroll 0% 0% / auto padding-box border-box;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: none solid rgb(51, 51, 51);
  align-items: center;
  justify-content: center;
  display: flex;
  box-sizing: border-box;
`;

const AppSumoLinkText = styled.span`
  box-sizing: border-box;
`;

const Heading = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 48px;
  line-height: 130%;
  max-width: 659px;
  text-align: center;
  box-sizing: border-box;
`;

const Description = styled.div`
  color: rgb(82, 82, 82);
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  max-width: 671px;
  text-align: center;
  box-sizing: border-box;
`;

const FeaturesContainer = styled.div`
  width: 816px;
  color: rgb(82, 82, 82);
  font-size: 13px;
  line-height: 100%;
  color: rgb(82, 82, 82);
  font-size: 13px;
  line-height: 13px;
  justify-content: space-between;
  display: flex;
  box-sizing: border-box;
`;

const Feature = styled.div`
  padding: 4px 6px;
  gap: 4px;
  border-radius: 4px;
  border: 1px solid rgb(230, 230, 230);
  background: rgb(250, 250, 250);
  gap: 4px;
  border-radius: 4px;
  border: 1px solid rgb(230, 230, 230);
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`;

const FeatureIcon = styled.div`
  line-height: 0px;
  box-sizing: border-box;
`;

const FeatureText = styled.div`
  vertical-align: middle;
  box-sizing: border-box;
`;

const CTAButtonsContainer = styled.div`
  gap: 24px;
  align-content: center;
  flex-shrink: 1;
  flex-direction: row;
  display: flex;
  box-sizing: border-box;
`;

const TryForFreeButton = styled.button`
  font-size: 16px;
  padding: 6px 28px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0)
    linear-gradient(135deg, rgb(96, 4, 255), rgb(127, 53, 255) 23.95%, rgb(55, 0, 151) 60.11%, rgb(141, 74, 255))
    repeat scroll 0% 0% / auto padding-box border-box;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgb(255, 255, 255);
  font-weight: 500;
  text-align: center;
  transition-duration: 0.2s;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  display: block;
  font-family: Manrope, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans',
    Arial, sans-serif, 'Apple Color Emoji', NotoColorEmojiLimited, 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 24px;
  text-decoration: none solid rgb(255, 255, 255);
  transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s,
    box-shadow 0.2s ease-in-out 0s;
  user-select: none;
  appearance: button;
  text-transform: none;
  margin: 0px;
  box-sizing: border-box;
`;

const ViewPricingButton = styled.button`
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
  font-family: Manrope, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans',
    Arial, sans-serif, 'Apple Color Emoji', NotoColorEmojiLimited, 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 24px;
  text-decoration: none solid rgb(82, 82, 82);
  transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s,
    box-shadow 0.2s ease-in-out 0s;
  user-select: none;
  appearance: button;
  text-transform: none;
  margin: 0px;
  box-sizing: border-box;
`;
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh; /* Adjust the height based on your requirements */
`;
const StyledImage = styled.img`
  height: auto;
  max-width: 94%;
  border-radius: 26px;
  vertical-align: middle;
  box-sizing: border-box;
`;
const StyledImage1 = styled.img`
  height: auto;
  max-width: 84%;
    margin-top: -17pc;
  vertical-align: middle;
  box-sizing: border-box;
`;
const YourSecondBrain = () => {
  return (
    <MainContainer>
      <AppSumoContainer>
        <AppSumoImage src="https://afforai.com/img/icons/appsumo.png" width="26" height="20" alt="AppSumo" />
        <AppSumoText>Now on AppSumo</AppSumoText>
        <AppSumoLink href="https://appsumo.8odi.net/3eR3xn" target="_blank">
          <AppSumoLinkText>Get Lifetime Deal</AppSumoLinkText>
        </AppSumoLink>
      </AppSumoContainer>
      <Heading>Your second brain for maximizing productivity</Heading>
      <Description>
        Afforai is an AI chatbot that searches, summarizes, and translates info from multiple sources to produce
        trustworthy research. Feed lengthy research documents to stacks of dry compliance requirements and extract the key
        findings you need.
      </Description>
      <FeaturesContainer>
        <Feature>
          <FeatureIcon></FeatureIcon>
          <FeatureText>Summarize Key Findings</FeatureText>
        </Feature>
        <Feature>Compare Between Documents</Feature>
        <Feature>
          <FeatureIcon></FeatureIcon>
          <FeatureText>Search For Answers</FeatureText>
        </Feature>
        <Feature>Ask in Any Language</Feature>
      </FeaturesContainer>
      <CTAButtonsContainer>
        <TryForFreeButton type="button">Try for free</TryForFreeButton>
        <ViewPricingButton type="button">View pricing</ViewPricingButton>
      </CTAButtonsContainer>

    </MainContainer>
  );
};

export default YourSecondBrain;
export const StyledImageComponent = () => {
    return (<>
      <CenteredContainer>
    <StyledImage src="https://afforai.com/img/graphics/laptop-landing-3.png" alt="Laptop" width="100%" />
    <StyledImage1 src="https://afforai.com/img/graphics/laptop-landing-1.png" alt="Laptop" width="100%" />;
    </CenteredContainer>
    </> )
  };
  