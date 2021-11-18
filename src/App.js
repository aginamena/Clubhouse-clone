import React from 'react';
import Welcome from './components/pages/Welcome';
import './styles/App.scss';
import {
  BrowserRouter as Router,
  Routes, // we had to change from switch to Routes
  Route
} from "react-router-dom";
import PlanLayout from './components/pages/PlanLayout';
import PhoneConfirmation from './components/pages/PhoneConfirmation';
import CodeConfirm from './components/pages/CodeConfirm';
import AllowNotification from './components/pages/AllowNotification';

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/invite" element={<PhoneConfirmation />} />
          <Route exact path="/code_confirm" element={<CodeConfirm />}></Route>
          <Route exact path="/allow_notification" element={<AllowNotification />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
