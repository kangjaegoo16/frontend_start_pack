import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainLayout from "./component/MainLayout";
import Login from "./component/Login";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Main from "./component/Main";
import Error404 from "./error/404";
function App() {

  return (
      <Switch>
          <Router>
              <MainLayout />
              <PrivateRoute exact path="/main" component={Main} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute  component={Error404} />
          </Router>
      </Switch>
  );
}

export default App;
