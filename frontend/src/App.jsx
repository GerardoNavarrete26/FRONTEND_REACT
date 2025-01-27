import React from 'react';
import ListaCabañas from './pages/Cabañas/ListaCabañas'; // Importa el componente ListarCabañas
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importar componentes de React Router
import EstadoCabañas from './pages/Cabañas/EstadoCabañas';

const App = () => {
  return (
    <Router>
      <div >
        {/* Configuración de rutas */}
        <Routes>
          <Route path="/ListaCabañas" element={<ListaCabañas />} />
          <Route path="/EstadoCabañas" element={<EstadoCabañas />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;