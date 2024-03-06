
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/register', formData);
      console.log(response.data); // Debería ser la respuesta del backend
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
  };

  
  const containerStyle = {
    backgroundColor: '#daeaf6',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  };

  const formStyle = {
    width: '350px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)'
  };

  const inputStyle = {
    marginBottom: '1rem',
    padding: '0.75rem',
    fontSize: '1rem',
    borderRadius: '0.25rem',
    border: '1px solid #daeaf6',
    backgroundColor: '#b5d6d6',
    color: '#000',
    width: '100%',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    borderRadius: '0.25rem',
    backgroundColor: '#b5d6d6',
    color: '#000',
    border: 'none',
    width: '100%',
    boxSizing: 'border-box',
    cursor: 'pointer'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#000'
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Registrarse</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            name="username"
            value={formData.username}
            onChange={handleChange}
            style={inputStyle}
          />
          <br />
          <input
            type="email"
            placeholder="Correo electrónico"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <br />
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />
          <br />
          <button type="submit" style={buttonStyle}>Registrarse</button>
        </form>
        <br />
        <br />
        <button style={{ ...buttonStyle, ...linkStyle }}>
          <Link to="/inicio-sesion" style={linkStyle}>Ir a Inicio de Sesión</Link>
        </button>
      </div>
    </div>
  );
};

export default RegisterForm;
