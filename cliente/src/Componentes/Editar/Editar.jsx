
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const VisualizarCitas = () => {
    const [citas, setCitas] = useState([]);

    useEffect(() => {
        const fetchCitas = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/citas/all');
                setCitas(response.data);
            } catch (error) {
                console.error('Error al obtener citas:', error);
            }
        };
        fetchCitas();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:3000/api/citas/${id}`);
            setCitas(citas.filter(cita => cita._id !== id));
        } catch (error) {
            console.error('Error al eliminar cita:', error);
        }
    };
    
    const handleEdit = async (id) => {
        
        window.location.href = `/editar/${id}`;
    };


    const containerStyle = {
        backgroundColor: '#daeaf6',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
    };

    const listItemStyle = {
        backgroundColor: '#fff',
        padding: '20px',
        marginBottom: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)'
    };

    const buttonStyle = {
        backgroundColor: '#b5d6d6',
        color: '#000',
        border: 'none',
        padding: '0.75rem 1rem',
        borderRadius: '0.25rem',
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <h1>Lista de Citas</h1>
            <br />
            <ul>
                {citas.map((cita) => (
                    <li key={cita._id} style={listItemStyle}>
                        <div>
                            <strong>Nombre y Apellido:</strong> {cita.nombre_y_apellido}
                        </div>
                        <br />
                        <div>
                            <strong>CIN:</strong> {cita.CIN}
                        </div>
                        <br />
                        <div>
                            <strong>Edad:</strong> {cita.edad}
                        </div>
                        <br />
                        <div>
                            <strong>Teléfono:</strong> {cita.telefono}
                        </div>
                        <br />
                        <div>
                            <strong>Especialidades Consultadas:</strong> {cita.especialidades_consultadas}
                        </div>
                        <br />
                        <div>
                            <strong>Fecha de consulta:</strong> {cita.fecha_consulta}
                        </div>
                        <br />
                        <div>
                            <strong>Hora de consulta:</strong> {cita.hora_consulta}
                        </div>
                        <br />
                        <div>
                            <button style={{ ...buttonStyle, marginRight: '10px' }} onClick={() => handleDelete(cita._id)}>Eliminar</button>
                            <Link to={`/editar/${cita._id}`}>
                                <button style={buttonStyle}>Editar</button>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
            <div>
                <button style={buttonStyle}>
                    <Link to={'/home'} style={{ color: '#000', textDecoration: 'none' }}>
                        Volver a Inicio
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default VisualizarCitas;


    