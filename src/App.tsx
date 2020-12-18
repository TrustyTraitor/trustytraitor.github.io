import {Component} from 'react';
import './App.scss';
import './Components/Navigation';
import Navigation from './Components/Navigation';
import Home from './Home';
import Projects from './Projects';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>

          <Navigation/>
          
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Projects" exact component={Projects}/>
          </Switch>

        </Router>
        
        
      </div>
    );
  }
  
}

export default App;
