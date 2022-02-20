import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import  Reports from './pages/Reports';
import Produce from './pages/Product';
import Team from './pages/Team';
import TheOrder from './pages/TheOrder';
function App() {
  return (
    <Router>
      

     <div>
     <Sidebar />

     </div>
     <div>
      <Routes>
        <Route path='' element={<Overview />} />
        <Route path='/reports' element={< Reports/>} />
        <Route path='/products' element={<Produce />} />
        <Route path='/products/theorder' element={<TheOrder />} />
        
        <Route path='/team' element={<Team />} />
      </Routes>
    </div>
     
      
    </Router>
  );
}

export default App;
