import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import HatsPage from './pages/hatspage/hatspage.component';

function App() {
  return (
    <Router>
      <div>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/hats' component={HatsPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
