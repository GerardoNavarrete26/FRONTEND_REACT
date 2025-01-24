import React from 'react';
import ListaCabañas from './pages/Cabañas/ListaCabañas'; // Importa el componente ListarCabañas
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="content">
     
      
      {/* Solo llamas al componente ListaCabañas */}
      <ListaCabañas />
    </div>
  );
};

export default App;