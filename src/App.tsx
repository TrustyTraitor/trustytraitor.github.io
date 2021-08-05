import {Component} from 'react';
import './App.scss';
import './Components/Navigation';
import Navigation from './Components/Navigation';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

import {HashRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component 
{
  render() 
  {
    return (
      <div className="App">
        <Router>

          <Navigation/>
          
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Projects" exact component={Projects}/>
            <Route path="/" component={Home}/>
          </Switch>

        </Router>
      </div>
    );
  }
}

export default App;