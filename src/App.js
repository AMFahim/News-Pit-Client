import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddArticle from './Components/Dashboard/AddArticle/AddArticle';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addArticle">
          <AddArticle />
        </Route>
        <Route path="/addAdmin">
          <AddAdmin />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
