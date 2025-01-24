import React, { useState } from 'react';
import SuiteImage from '../../assets/Suite.jpg';
import TainyImage from '../../assets/Tainy.jpg';
import './ListaCabañas.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Datos de las habitaciones
const roomsData = [
  { number: "01", type: "suite", status: "ocupado", price: 91900, description: "Cabaña grande para 2 personas", image: SuiteImage },
  { number: "02", type: "suite", status: "disponible", price: 91900, description: "Cabaña grande para 2 personas", image: SuiteImage},
  { number: "03", type: "suite", status: "disponible", price: 91900, description: "Cabaña grande para 2 personas", image: SuiteImage },
  { number: "04", type: "suite", status: "disponible", price: 91900, description: "Cabaña grande para 2 personas", image: SuiteImage },
  { number: "05", type: "suite", status: "ocupado", price: 91900, description: "Cabaña grande para 2 personas", image: SuiteImage },
  { number: "06", type: "suite", status: "disponible", price: 91900, description: "Cabaña grande para 2 personas", image: SuiteImage },
  { number: "07", type: "suite", status: "disponible", price: 91900, description: "Cabaña grande para 2 personas", image: SuiteImage },
  { number: "08", type: "suite", status: "ocupado", price: 91900, description: "Cabaña grande para 2 personas", image: SuiteImage },
  { number: "09", type: "suite", status: "ocupado", price: 91900, description: "Cabaña grande para 2 personas", image: SuiteImage },
  { number: "10", type: "suite", status: "pendiente", price: 91900, description: "Cabaña grande para 2 personas", image: SuiteImage },
  { number: "11", type: "tainycabin", status: "disponible", price: 160900, description: "Cabaña familiar 2 adultos 2 niños", image: TainyImage },
  { number: "12", type: "tainycabin", status: "disponible", price: 160900, description: "Cabaña familiar 2 adultos 2 niños", image: TainyImage },
  { number: "13", type: "tainycabin", status: "disponible", price: 160900, description: "Cabaña familiar 2 adultos 2 niños", image: TainyImage },
  { number: "14", type: "tainycabin", status: "disponible", price: 160900, description: "Cabaña familiar 2 adultos 2 niños", image: TainyImage },
  { number: "15", type: "tainycabin", status: "disponible", price: 160900, description: "Cabaña familiar 2 adultos 2 niños", image: TainyImage },
  { number: "16", type: "tainycabin", status: "disponible", price: 160900, description: "Cabaña familiar 2 adultos 2 niños", image: TainyImage },
  { number: "17", type: "tainycabin", status: "disponible", price: 160900, description: "Cabaña familiar 2 adultos 2 niños", image: TainyImage },
  { number: "18", type: "tainycabin", status: "disponible", price: 160900, description: "Cabaña familiar 2 adultos 2 niños", image: TainyImage },
  { number: "19", type: "tainycabin", status: "disponible", price: 160900, description: "Cabaña familiar 2 adultos 2 niños", image: TainyImage },
  { number: "20", type: "tainycabin", status: "disponible", price: 160900, description: "Cabaña familiar 2 adultos 2 niños", image: TainyImage },
];



// Componente de tarjeta de habitación
const RoomCard = ({ room }) => {
    return (
      <div className="col-md-4 mb-4">
        <div className="card">
         <img src={room.image} className="card-img-top" alt={room.type} />
          <div className="card-body">
            <h5 className="card-title">Habitación {room.number}</h5>
            <p className="card-text">
              <strong>Tipo:</strong> {room.type === 'suite' ? 'Suite' : 'Tainy Cabin'}<br />
              <strong>Precio:</strong> ${room.price.toLocaleString()} CLP<br />
              <strong>Estado:</strong> {room.status}<br />
              <strong>Descripción:</strong> {room.description}
            </p>
            <button
                  className="btn btn-success me-2"
                  onClick={() => handleEditRoom(room.number)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveRoom(room.number)}
                >
                  Eliminar
                </button>
          </div>
        </div>
      </div>
    );
  };
  //---------------------------------------------------------------------
  // Componente de listado de cabañas
  const ListaCabañas = () => {
    const [filters, setFilters] = useState({
      type: 'all',
      status: 'all',
      search: ''
    });
  
    // Función para actualizar los filtros
    const handleFilterChange = (filter, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filter]: value
      }));
    };
  
    // Filtrar las habitaciones según los filtros
    const filteredRooms = roomsData.filter((room) => {
      const matchesType = filters.type === 'all' || room.type === filters.type;
      const matchesStatus = filters.status === 'all' || room.status === filters.status;
      const matchesSearch = room.number.includes(filters.search);
      return matchesType && matchesStatus && matchesSearch;
    });
  // Vista al usuario
    return (
      <div>
         <h1 className="text-center mb-4">Listado de Cabañas</h1>
        {/* Filtros */}
        <div className="d-flex justify-content-between mb-4">
          <select className="form-select w-auto" onChange={e => handleFilterChange('type', e.target.value)}>
            <option value="all">Todos los Tipos</option>
            <option value="tainycabin">Tainy Cabin</option>
            <option value="suite">Suite</option>
          </select>
          <select className="form-select w-auto" onChange={e => handleFilterChange('status', e.target.value)}>
            <option value="all">Todos los Estados</option>
            <option value="disponible">Disponible</option>
            <option value="ocupado">Ocupado</option>
            <option value="pendiente">Pendiente</option>
          </select>
          <input 
            type="text" 
            className="form-control w-auto" 
            placeholder="Buscar por número de habitación" 
            onChange={e => handleFilterChange('search', e.target.value)} 
          />
        </div>
  
        {/* Listado de cabañas */}
        <div id="roomList" className="row">
          {filteredRooms.length === 0 ? (
            <p>No se encontraron cabañas que coincidan con los filtros.</p>
          ) : (
            filteredRooms.map((room) => (
              <RoomCard key={room.number} room={room} />
            ))
          )}
        </div>
      </div>
    );
  };
  
  export default ListaCabañas;