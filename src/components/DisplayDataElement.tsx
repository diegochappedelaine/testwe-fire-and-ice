import styled from "styled-components";

type DisplayDataElementProps = {
  keyName: string;
  value: string;
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 16px;

  h4 {
    font-weight: 500;
    width: 100px;
    min-width: 100px;
  }
`;

const DisplayDataElement: React.FC<DisplayDataElementProps> = ({
  keyName,
  value,
}) => {
  return (
    <Wrapper>
      <h4>{keyName} :</h4>
      <p>{!!value.length ? value : "N/A"}</p>
    </Wrapper>
  );
};

export default DisplayDataElement;
