import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainLayout from "./component/MainLayout";
import Login from "./component/Login";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Main from "./component/Main";
import Error404 from "./error/404";
function App() {

  return (
      <>
          <Router>
              <Switch>
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute path="/app" component={MainLayout} />
                  <Route  component={Error404} />
              </Switch>
          </Router>
      </>

  );
}

export default App;
