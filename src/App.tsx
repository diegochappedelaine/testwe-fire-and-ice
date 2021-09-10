import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { HomePage, CharacterPage, BookPage } from "pages";
import "./styles/reset.css";

const Container = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

const App = () => {
  return (
    <Container>
      <Switch>
        <Route path="/character/:id" component={CharacterPage} exact />
        <Route path="/book/:id" component={BookPage} exact />
        <Route path="/" component={HomePage} />
      </Switch>
    </Container>
  );
};

export default App;
