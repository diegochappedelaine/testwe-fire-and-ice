import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
import { HomePage, CharacterPage, BookPage } from "pages";
import { Header, HeroBanner } from "components";
import "./styles/reset.css";
import "./styles/style.css";

const Container = styled.div`
  margin: 32px auto 0;
  max-width: 800px;
`;

const App = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <Container>
        <Switch>
          <Route path="/character/:id" component={CharacterPage} exact />
          <Route path="/book/:id" component={BookPage} exact />
          <Route path="/" component={HomePage} />
        </Switch>
      </Container>
    </>
  );
};

export default App;
