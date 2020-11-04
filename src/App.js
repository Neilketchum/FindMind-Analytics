import logo from './logo.svg';
import './App.css';
import Signup from './Signup';
import Signin from './Signin';
import TaskBoard from './TaskBoard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Signup /> */}
      <Router>
      <Route path="/main" exact>
            <TaskBoard />
          </Route>
          <Route path="/login" exact>
            <Signin />
          </Route>
          <Route path="/" exact>
            <Signup />
          </Route>
      </Router>
    </div>
  );
}

export default App;
