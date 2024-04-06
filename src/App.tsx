import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Registration from './Pages/Registration';
import RegisterPetParent from './components/petParent/RegisterPetParent';
import RegisterVet from './components/veterinarian/RegisterVet';
import Home from './Pages/Home';
import VideoCall from "./Pages/VideoCall"

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' Component={Home} />
        <Route  path="/registration" Component={Registration} />
        <Route path="/registration/pet-parent" Component={RegisterPetParent} />
        <Route path="/registration/veterinarian" Component={RegisterVet} />
        <Route path="/videocall" Component={VideoCall} />
      </Routes>

    </Router>
  );
}

export default App;
