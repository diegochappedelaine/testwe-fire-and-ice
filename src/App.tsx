import { Switch, Route } from "react-router-dom";
import { HomePage, CharacterPage, BookPage } from "pages";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/character/:id" component={CharacterPage} exact />
        <Route path="/book/:id" component={BookPage} exact />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default App;
