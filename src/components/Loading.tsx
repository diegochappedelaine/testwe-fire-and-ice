import { Loader } from "assets";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 600px;
  display: grid;
  place-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <img src={Loader} alt="Loading ..." />
    </Container>
  );
};

export default Loading;
