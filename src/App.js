import { React, useEffect, useState } from 'react';
import ResetForm from './pages/ResetForm';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import * as ROUTES from './constants/routes';

function App() {
  const [value, setvalue] = useState({
    id: "0",
    address: ROUTES.PASSWORD_RESET,
    message: "Hello"
  });
  function changeValue(event) {
    setvalue(event);
  }

  return (
    <Router>
      <ResetForm change={changeValue} Value={value} />
    </Router>
  );
}


export default App;
