import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarApp from './pages/CalendarApp';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <CalendarApp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
