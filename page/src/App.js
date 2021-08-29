import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './views/main/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
