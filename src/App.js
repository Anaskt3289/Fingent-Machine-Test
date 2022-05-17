import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from "./Pages/LandingPage";
import RemoveProductPage from './Pages/RemoveProductPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/removeProduct' element={<RemoveProductPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
