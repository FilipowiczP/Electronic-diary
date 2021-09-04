import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from './context/context';

import Home from './views/main/Main';
import AdminLogin from "./views/admin/adminLogin";
import AdminPanel from "./views/admin/adminPanel";
import Logout from "./views/logout/logout";

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={AdminLogin} />
          <Route path='/admin-panel' component={AdminPanel} />
          <Route path='/logout' component={Logout} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
