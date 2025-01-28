import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AñadirReservas.css";

function AñadirReservas() {
  const formRef = useRef(null);
  const [rutCliente, setRutCliente] = useState("");
  const [rutError, setRutError] = useState("");

  // Función para limpiar los campos del formulario
  const handleReset = (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del botón
    if (formRef.current) {
      formRef.current.reset(); // Reiniciar los valores del formulario
      setRutCliente("");
      setRutError("");
    }
  };

  // Función para validar el RUT
  const handleRutChange = (event) => {
    const value = event.target.value;
    const rutRegex = /^[0-9]{2}\.[0-9]{3}\.[0-9]{3}-[0-9kK]$/; // Expresión regular para validar el formato 11.111.111-1
    setRutCliente(value);

    if (!rutRegex.test(value) && value !== "") {
      setRutError("El RUT debe seguir el formato: 11.111.111-1");
    } else {
      setRutError("");
    }
  };

    // Función para mostrar el selector de fecha
    const showDatePicker = (e) => {
        e.target.showPicker();
      };

  return (
    <div className="content">
      <h1 className="title">Agregar Reserva</h1>
      <form ref={formRef}>
        <label htmlFor="rut_cliente" className="form-label">
          Rut de Cliente:
        </label>
        <input
          type="text"
          id="rut_cliente"
          name="rut_cliente"
          className="form-input"
          placeholder="Ej: 11.111.111-1"
          value={rutCliente}
          onChange={handleRutChange}
          required
        />
        {rutError && <p className="error-text">{rutError}</p>}

        <label htmlFor="nombre_cliente" className="form-label">
          Nombre del Cliente:
        </label>
        <input
          type="text"
          id="nombre_cliente"
          name="nombre_cliente"
          className="form-input"
          required
        />

        <label htmlFor="habitacion" className="form-label">
          Habitación:
        </label>
        <select id="habitacion" name="habitacion" className="form-select" required>
          <option value="Suite">Suite</option>
          <option value="Tiny Cabin">Tiny Cabin</option>
        </select>

        <label htmlFor="fecha_entrada" className="form-label">
          Fecha de Entrada:
        </label>
        <input
          type="date"
          id="fecha_entrada"
          name="fecha_entrada"
          className="form-input"
          onFocus={showDatePicker} // Mostrar selector al hacer clic o enfocar
          onClick={showDatePicker} // Asegurarse de mostrar el selector aunque ya esté enfocado
          required
        />

        <label htmlFor="fecha_salida" className="form-label">
          Fecha de Salida:
        </label>
        <input
          type="date"
          id="fecha_salida"
          name="fecha_salida"
          className="form-input"
          onFocus={showDatePicker} // Mostrar selector al hacer clic o enfocar
          onClick={showDatePicker} // Asegurarse de mostrar el selector aunque ya esté enfocado
          required
        />

        <label htmlFor="canal_origen" className="form-label">
          Canal de Origen:
        </label>
        <select id="canal_origen" name="canal_origen" className="form-select" required>
          <option value="Directo">Directo</option>
          <option value="Booking">Booking</option>
          
        </select>

        <label htmlFor="estado" className="form-label">
          Estado:
        </label>
        <select id="estado" name="estado" className="form-select" required>
          <option value="Confirmada">Confirmada</option>
          <option value="Pendiente">Pendiente</option>
        </select>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            Aceptar
          </button>
          <button className="reset-btn" onClick={handleReset}>
            Restablecer
          </button>
        </div>
      </form>
    </div>
  );
}

export default AñadirReservas;
