import styled from "styled-components";

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: black;
  margin: 32px 0 48px;
`;

const Separator = () => {
  return <Line />;
};

export default Separator;
