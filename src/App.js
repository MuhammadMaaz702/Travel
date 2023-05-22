import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Travelstories from './pages/Travel-stories/Travelstories';
import { Route, Routes } from 'react-router-dom'
import Tsdeteils from './pages/Travelstoriesdeteils/Tsdeteils';
import Hotel from './pages/Hotels/Hotel';
import ThingsToDo from './pages/things-to-do/ThingsToDo';
import Restaurant from './pages/Restaurant/Restaurant';


function App() {
  return (
    <>
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route  path="/travelstories" element={<Travelstories />} />
        <Route  path="/travelstoriesdetails" element={<Tsdeteils/>} />
        <Route  path="/hotels" element={<Hotel/>} />
        <Route  path="/thingstodo" element={<ThingsToDo/>} />
        <Route  path="/restaurants" element={<Restaurant/>} />
      </Routes>
    
    </>
  );
}

export default App;
