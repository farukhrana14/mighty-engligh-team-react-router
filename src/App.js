
import './App.css';
import Home from './components/Home/Home';
import TeamDetails from './components/TeamDetails/TeamDetails';
import NotFound404 from'./components/NotFound404/NotFound404'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";


function App() {


  


  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/team/teamdetails/:idTeam'>
          <TeamDetails/>
        </Route>
        
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/*'>
          <NotFound404/>
        </Route>

      </Switch>



    </Router>
    

  );
}

export default App;
