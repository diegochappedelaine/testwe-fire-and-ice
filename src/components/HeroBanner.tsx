import styled from "styled-components";
import { ThroneIllustration } from "assets";

const Background = styled.div`
  background: #f7fafc;
`;

const HeroContainer = styled.header`
  padding: 44px 0 88px;
  max-width: 800px;
  margin: 68px auto 0;
  display: grid;
  place-items: center;

  img {
    width: 60%;
  }
`;

const HeroBanner = () => {
  return (
    <Background>
      <HeroContainer>
        <img src={ThroneIllustration} alt="Throne" />
      </HeroContainer>
    </Background>
  );
};

export default HeroBanner;
