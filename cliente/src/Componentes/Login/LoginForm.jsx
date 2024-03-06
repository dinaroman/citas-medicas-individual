

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/user/login', formData);
      const token = response.data.token;
      localStorage.setItem('token', token);
      console.log('Token de autenticación:', token);
      setIsLoggedIn(true);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError('Correo electrónico o contraseña incorrectos');
      } else {
        setError('Error al iniciar sesión. Inténtalo de nuevo más tarde');
      }
      console.error('Error al iniciar sesión:', error);
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

  return (
    <div style={containerStyle}>
      <div style={{ width: '350px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Iniciar Sesión</h2>
        {isLoggedIn ? (
          <p style={{ textAlign: 'center' }}>¡Has iniciado sesión correctamente!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={inputStyle}>
              <input
                type="email"
                placeholder="Correo electrónico"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div style={inputStyle}>
              <input
                type="password"
                placeholder="Contraseña"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {error && <p style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}
            <button type="submit" style={buttonStyle}>Iniciar sesión</button>
          </form>
        )}
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <button style={buttonStyle}>
            {isLoggedIn ? <Link to="/home" style={{ color: '#000', textDecoration: 'none' }}>Ir a la Página Principal</Link> : <Link to="/home" style={{ color: '#000', textDecoration: 'none' }}>Ir a la Página Principal</Link>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
