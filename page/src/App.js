import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from './context/context';

import Home from './views/main/Main';
import adminLogin from "./views/admin/adminLogin";
import adminPanel from "./views/admin/adminPanel";

function App() {
  return (

    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/admin' component={adminLogin} />
          <Route path='/admin-panel' component={adminPanel} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
