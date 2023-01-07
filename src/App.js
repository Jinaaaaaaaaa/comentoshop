import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"
import Basket from "./pages/Basket"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}
// function App() {
//   return (
//     <Home />
//   )
// }
export default App;
