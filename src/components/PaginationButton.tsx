import styled from "styled-components";

const Button = styled.button`
  margin: 16px 8px 64px;
  padding: 8px 16px;
  transition: color 0.1s ease-out;
  cursor: pointer;
`;

const PaginationButton: React.FC<{ onClick: () => void; disabled: boolean }> =
  ({ children, disabled, onClick }) => {
    return (
      <Button disabled={disabled} onClick={onClick}>
        {children}
      </Button>
    );
  };

export default PaginationButton;
