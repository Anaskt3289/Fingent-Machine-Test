import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from "./Pages/LandingPage";
import RemoveProductPage from './Pages/RemoveProductPage';
import ListProductsPage from './Pages/ListProductsPage';
import Products from './Store/ProductsContext';

function App() {
  return (
    <div>
      <Products>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/removeProduct' element={<RemoveProductPage />} />
            <Route path='/listProducts' element={<ListProductsPage />} />
          </Routes>
        </BrowserRouter>
      </Products>
    </div>
  );
}

export default App;
