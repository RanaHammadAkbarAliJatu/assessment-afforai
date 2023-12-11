import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Users from './Users.json';
const Container = styled.div`
  max-width: 1320px;
  align-items: center;
  flex-direction: column;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  margin-top: 25pc;
  padding-right: 12px;
  width: 100%;
  box-sizing: border-box;
`;
const StyledLink = styled.a`
  outline: none;
  text-decoration: none;
  margin-bottom: 8px;
  color: rgb(13, 110, 253);
  box-sizing: border-box;
`;

const Image = styled.img`
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  box-sizing: border-box;
`;

const Title = styled.div`
  color: rgb(34, 34, 34);
  font-weight: 600;
  font-size: 36px;
  line-height: 130%;
  text-align: center;
  margin-bottom: 8px;
  box-sizing: border-box;
`;

const Description = styled.div`
  color: rgb(82, 82, 82);
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;
  text-align: center;
  margin-bottom: 8px;
  box-sizing: border-box;
`;
 
const SeeWhatOurUsers = () => (
  <>
  <Container>
    <StyledLink href="https://www.producthunt.com/products/afforai/" target="_blank">
      <Image src="https://afforai.com/img/graphics/ph-review.webp" alt="Product Hunt Review 4.9/5" width="170px" />
    </StyledLink>
    <Title>See what our users say</Title>
    <Description>Loved by thousands, all around the World</Description>
  </Container>
  <Banner Users={Users} speed={65000} isLeft={false}/>
  <Banner Users={Users} speed={65000} isLeft={true}/>
  </>
);

export default SeeWhatOurUsers;
