import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const FixedWrapper = styled.div`
  background: white;
  width: 100vw;
  position: fixed;
  z-index: 2;
  box-shadow: 0px 5px 4px rgba(221, 221, 221, 0.25);
  top: 0;
`;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  font-size: 20px;
  color: black;
`;

export const NavElement = styled(NavLink)`
  font-weight: 400;
  text-decoration: none;
  transition: color 0.1s ease-out;
  font-size: 16px;
  color: #718096;

  &:hover {
    color: red;
  }
`;

const Header = () => {
  return (
    <FixedWrapper>
      <HeaderContainer>
        <Title to="/">An API of Ice And Fire Consumer</Title>
        <NavElement
          strict
          exact
          activeStyle={{
            color: "black",
          }}
          to={"/books"}
        >
          Books
        </NavElement>
      </HeaderContainer>
    </FixedWrapper>
  );
};

export default Header;
