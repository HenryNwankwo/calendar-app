import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarApp from './pages/CalendarApp';
import './App.css';
import CreateEvent from './components/CreateEvent/CreateEvent';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact>
            <CalendarApp />
            <CreateEvent/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
