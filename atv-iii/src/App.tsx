import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClientPage } from "./pages/clientsPage/clientPage";
import { ProductPage } from "./pages/productsPage/productPage";
import { ServicePage } from "./pages/servicesPage/servicePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ClientPage />}/>
        <Route path="/productPage" element={<ProductPage />}/>
        <Route path='/servicePage' element={<ServicePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
