
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditarCita = () => {
    const { id } = useParams();
    const [editedCita, setEditedCita] = useState({
        nombre_y_apellido: '',
        CIN: '',
        edad: '',
        telefono: '',
        especialidades_consultadas: '' 
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCita = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:3000/api/citas/${id}`);
                setEditedCita(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener la cita:', error);
            }
        };
        fetchCita();
    }, [id]);

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://127.0.0.1:3000/api/citas/${id}`, editedCita);
            // Redirigir al usuario a la página de visualización de citas después de guardar
            window.location.href = '/editar';
        } catch (error) {
            console.error('Error al guardar la edición:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedCita({ ...editedCita, [name]: value });
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

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

    return (
        <div style={containerStyle}>
            <div style={formStyle}>
                <h1>Editar Cita</h1>
                <br />
                <form onSubmit={onSubmit}>
                    <div>
                        <label>Nombre y Apellido:</label>
                        <input type="text" name="nombre_y_apellido" value={editedCita.nombre_y_apellido} onChange={handleChange} style={inputStyle} />
                    </div>      
                    <br />
                    <div>
                        <label>CIN:</label>
                        <input type="number" name="CIN" value={editedCita.CIN} onChange={handleChange} style={inputStyle} />
                    </div>
                    <br />
                    <div>
                        <label>Edad:</label>
                        <input type="number" name="edad" value={editedCita.edad} onChange={handleChange} style={inputStyle} />
                    </div>
                    <br />
                    <div>
                        <label>Teléfono:</label>
                        <input type="tel" name="telefono" value={editedCita.telefono} onChange={handleChange} style={inputStyle} />
                    </div>
                    <br />
                    <div>
                        <label>Especialidades Consultadas:</label>
                        <select name="especialidades_consultadas" value={editedCita.especialidades_consultadas} onChange={handleChange} style={inputStyle}>
                            <option value="Médico Clínico">Médico Clínico</option>
                            <option value="Cardiólogo">Cardiólogo</option>
                            <option value="Endocrinólogo">Endocrinólogo</option>
                        </select>
                    </div>
                    <br />
                    <div>
                        <label>Fecha de consulta</label>
                        <input type="date" name="fecha_consulta" value={editedCita.fecha_consulta} onChange={handleChange} style={inputStyle} />
                    </div>
                    <br />
                    <div>
                        <label>Hora de consulta</label>
                        <input type="time" name="hora_consulta" value={editedCita.hora_consulta} onChange={handleChange} style={inputStyle} />
                    </div>
                    <br />
                    
                    <button type="submit" style={inputStyle}>Guardar</button>
                </form>
            </div>
        </div>
    );
};

export default EditarCita;
