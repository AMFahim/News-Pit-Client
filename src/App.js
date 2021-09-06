import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AddArticle from './Components/Dashboard/AddArticle/AddArticle';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/addArticle">
          <AddArticle/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
