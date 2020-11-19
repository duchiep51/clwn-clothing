import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import HatsPage from './pages/hatspage/hatspage.component';

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
