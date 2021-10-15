import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarApp from './pages/CalendarApp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <CalendarApp />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
