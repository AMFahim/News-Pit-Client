import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddArticle from './Components/Dashboard/AddArticle/AddArticle';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';
import NewsDetails from './Components/Home/NewsDetails/NewsDetails';
import PrivateRoute from './Components/Login/PrivateRoute';


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/addArticle">
            <AddArticle />
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin />
          </PrivateRoute>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/details/:_id">
            <NewsDetails/>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
