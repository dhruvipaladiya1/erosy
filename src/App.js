import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLayout from './Components/UserLayout';
import ROUTES from './Configs/Route';
import Home from './Components/Home';
import Locations from './Components/Locations';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<UserLayout />}>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.LOCATIONS} element={<Locations />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
