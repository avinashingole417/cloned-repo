import './App.css';
import HomePage from './pages/homePage/homepage.component'
import {Switch,Route} from 'react-router-dom'
const HatsPage = ()=> (
  <div>
    <h2>This is HatsPage</h2>
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePage} />
        <Route exact={true} path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
