import React from 'react';
import Welcome from './components/pages/Welcome';
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Routes, // we had to change from switch to Routes
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
