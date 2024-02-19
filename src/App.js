import React from 'react';
import { 
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom'
import Main from './components/Main';
import ProjectOne from './components/ProjectOne';
import ProjectTwo from './components/ProjectTwo';
import ProjectThree from './components/ProjectThree';
import ProjectFour from './components/ProjectFour';


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Main />}
          />
          <Route
            path='/project1'
            element={<ProjectOne />}
          />
          <Route
            path='/project2'
            element={<ProjectTwo />}
          />
          <Route
            path='/project3'
            element={<ProjectThree />}
          />
          <Route
            path='/project4'
            element={<ProjectFour />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
