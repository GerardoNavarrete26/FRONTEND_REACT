import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ListaReservas from './pages/Reservas/ListaReservas'; // Importacion

const App = () => {
  return (
    <div className="content">
     
      
      {/* Solo llamas al componente ListaReservas */}
      <ListaReservas />
    </div>
  );
};

export default App;