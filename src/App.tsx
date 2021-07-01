import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from 'pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
