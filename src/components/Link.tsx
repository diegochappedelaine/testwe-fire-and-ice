import styled from "styled-components";
import { Link } from "react-router-dom";

const ALink = styled(Link)`
  color: black;
  text-decoration: none;
`;

type LinkComponentProps = {
  href: string;
};

const LinkComponent: React.FC<LinkComponentProps> = ({ href, children }) => {
  return <ALink to={href}>{children}</ALink>;
};

export default LinkComponent;
