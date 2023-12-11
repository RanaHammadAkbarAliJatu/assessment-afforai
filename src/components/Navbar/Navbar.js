import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  padding-bottom: 24px;
  padding-top: 24px;
  padding-left: 48px;
  padding-right: 48px;
  flex-wrap: nowrap;
  justify-content: flex-start;
  flex-direction: column;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 1030;
  top: 0;
  align-items: center;
  display: flex;
  box-sizing: border-box;
`;

const NavbarContainer = styled.div`
  max-width: 1264px;
  padding: 8px 24px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(209, 213, 219);
  border-radius: 16px;
  backdrop-filter: blur(16px);
  background: rgba(250, 250, 250, 0.5);
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  box-sizing: border-box;
`;

const NavbarLogo = styled.a`
  height: fit-content;
  gap: 8px;
  flex: 1 1 0%;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: none solid rgb(0, 0, 0);
  padding-bottom: 0px;
  padding-top: 0px;
  margin-right: 0px;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 1;
  display: flex;
  color: rgb(0, 0, 0);
  font-size: 20px;
  white-space: nowrap;
  box-sizing: border-box;
`;

const LogoPicture = styled.picture`
  box-sizing: border-box;
`;

const LogoImage = styled.img`
  vertical-align: middle;
  box-sizing: border-box;
`;

const LogoText = styled.div`
  color: rgb(17, 17, 17);
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  height: 24px;
  box-sizing: border-box;
`;
const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: outside none none;
  margin-bottom: 0;
  padding-left: 0;
  box-sizing: border-box;
`;

const NavLink = styled.a`
  padding-left: 8px;
  padding-right: 8px;
  outline: rgba(0, 0, 0, 0.65) none 0;
  text-decoration: none solid rgba(0, 0, 0, 0.65);
  margin-left: 8px;
  margin-right: 8px;
  background: rgba(0, 0, 0, 0) none repeat scroll 0 0 / auto padding-box border-box;
  border: 0 none rgba(0, 0, 0, 0.65);
  color: rgba(0, 0, 0, 0.65);
  display: block;
  font-size: 16px;
  font-weight: 400;
  transition: color 0.15s ease-in-out 0s, background-color 0.15s ease-in-out 0s, border-color 0.15s ease-in-out 0s;
  box-sizing: border-box;
`;

const AuthButtons = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  display: flex;
  list-style: outside none none;
  margin-bottom: 0;
  padding-left: 0;
  box-sizing: border-box;
`;
// ... (previous code)

const AuthButton = styled.button`
  height: fit-content;
  padding-left: 16px;
  padding-right: 16px;
  background-color: rgb(245, 245, 245);
  border-color: rgb(230, 230, 230);
  color: rgb(82, 82, 82);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 16px;
  text-align: center;
  transition-duration: 0.2s;
  border: 1px solid rgb(230, 230, 230);
  cursor: pointer;
  display: block;
  font-family: Manrope, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', NotoColorEmojiLimited, 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 21px;
  text-decoration: none solid rgb(82, 82, 82);
  transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s;
  user-select: none;
  appearance: button;
  text-transform: none;
  margin: 0;
  box-sizing: border-box;
`;

const TryForFreeButton = styled.button`
  height: fit-content;
  padding-left: 16px;
  padding-right: 16px;
  background: rgba(0, 0, 0, 0) linear-gradient(135deg, rgb(96, 4, 255), rgb(127, 53, 255) 23.95%, rgb(55, 0, 151) 60.11%, rgb(141, 74, 255)) repeat scroll 0% 0% / auto padding-box border-box;
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgb(255, 255, 255);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 16px;
  text-align: center;
  transition-duration: 0.2s;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  display: block;
  font-family: Manrope, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', NotoColorEmojiLimited, 'Segoe UI Emoji', 'Segoe UI Symbol';
  line-height: 21px;
  text-decoration: none solid rgb(255, 255, 255);
  transition: color 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s, border-color 0.2s ease-in-out 0s, box-shadow 0.2s ease-in-out 0s;
  user-select: none;
  appearance: button;
`;
const YourComponent = () => {
  return (
    <Navbar>
      <NavbarContainer>
        <NavbarLogo href="/">
          <LogoPicture>
            <source srcSet="https://afforai.com/img/graphics/logo-new-violet.png" type="image/webp" />
            <LogoImage src="https://afforai.com/img/graphics/logo-new-violet.png" alt="Afforai Logo" height="24px" width="24px" />
          </LogoPicture>
          <LogoText>Afforai</LogoText>
        </NavbarLogo>
        <NavLinks>
          <NavLink href="https://afforai.getrewardful.com/signup">Affiliate</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/#testimonial">Testimonials</NavLink>
          <NavLink href="https://help.afforai.com/" target="_blank">Help Center</NavLink>
        </NavLinks>
        <AuthButtons>
          <AuthButton type="button">Log in</AuthButton>
          <TryForFreeButton type="button">Try for free</TryForFreeButton>
        </AuthButtons>
      </NavbarContainer>
    </Navbar>
  );
};

export default YourComponent;
