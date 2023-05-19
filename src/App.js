import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Travelstories from './pages/Travel-stories/Travelstories';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/travelstories" element={<Travelstories />} />
      </Routes>
    
    </>
  );
}

export default App;
