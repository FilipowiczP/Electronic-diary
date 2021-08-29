import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from './context/context';

import Home from './views/main/Main';
import adminLogin from "./views/admin/adminLogin";

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={adminLogin} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
