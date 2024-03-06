
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Estilos personalizados
  const containerStyle = {
    backgroundColor: '#daeaf6',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  };

  const buttonStyle = {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    borderRadius: '0.25rem',
    backgroundColor: '#b5d6d6',
    color: '#000',
    border: 'none',
    marginBottom: '1rem',
    cursor: 'pointer'
  };

  return (
    <div style={containerStyle}>
      <h1>VitaliClinic</h1>
      <br />
      <h2>Agenda de citas médicas</h2>
      <br />
      <div>
        <Link to="/crear">
          <button style={buttonStyle}>Agendar Cita</button>
        </Link>
      </div> 
      <br />
      <div>
        <Link to="/editar">
          <button style={buttonStyle}>Detalles de las Citas</button>
        </Link>
      </div>
      <br />
    </div>
  );
}

export default Home;


