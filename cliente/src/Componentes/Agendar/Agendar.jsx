

import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AgendarCita = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            // Formatear la fecha para enviar solo la parte de la fecha sin la hora
            const formattedData = {
                ...data,
                // Extraer solo la parte de la fecha sin la hora
                fecha_consulta: new Date(data.fecha_consulta).toISOString().split('T')[0]
            };

            console.log('Esto es lo que manda ', formattedData);

            // Verificar si hay errores de validación
            if (Object.keys(errors).length !== 0) {
                alert('Por favor, complete todos los campos correctamente.');
                return;
            }

            const response = await axios.post('http://127.0.0.1:3000/api/citas/agendar', formattedData);
            console.log('Cita agendada con éxito ', response);
            navigate('/home'); // Navega de vuelta a la página principal 
        } catch (error) {
            console.error('Error al agendar cita:', error);
        }
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
        cursor: 'pointer'
    };

    return (
        <div style={containerStyle}>
            <div>
                <h1>Agenda tu cita</h1>
            </div>
            <br />
            <br />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h2>Agregar detalles de la cita</h2>
                    <div>
                        <label>Nombre y Apellido:</label>
                        <br />
                        <input type='text' {...register('nombre_y_apellido', { required: true, minLength: 2, maxLength: 150 })} style={inputStyle} />
                        {errors.nombre_y_apellido && <span>El nombre y apellido son requeridos</span>}
                    </div>
                    <br />
                    <div>
                        <label>CIN:</label>
                        <br />
                        <input type='number' {...register('CIN', { required: true, minLength: 4, maxLength: 20 })} style={inputStyle} />
                        {errors.CIN && <span>El CIN es requerido</span>}
                    </div>
                    <br />
                    <div>
                        <label>Edad:</label>
                        <br />
                        <input type='number' {...register('edad', { required: true, max: 110 })} style={inputStyle} />
                        {errors.edad && <span>La edad es requerida</span>}
                    </div>
                    <br />
                    <div>
                        <label>Teléfono:</label>
                        <br />
                        <input type='tel' {...register('telefono', { required: true, minLength: 5, maxLength: 30 })} style={inputStyle} />
                        {errors.telefono && <span>El teléfono es requerido</span>}
                    </div>
                    <br />
                    <div>
                        <label>Especialidades Consultadas:  </label>
                        <select {...register('especialidades_consultadas', { required: true })} style={inputStyle}>
                            <option value='Médico Clínico'>Médico Clínico</option>
                            <option value='Cardiólogo'>Cardiólogo</option>
                            <option value='Endocrinólogo'>Endocrinólogo</option>
                        </select>
                        {errors.especialidades_consultadas && <span>La especialidad es requerida</span>}
                    </div>
                    <br />
                    <div>
                        <label>Fecha de la cita (DD/MM/YYYY):</label>
                        <br />
                        <input type='date' {...register('fecha_consulta', { required: true })} style={inputStyle} />
                        {errors.fecha_consulta && <span>La fecha de consulta es requerida</span>}
                    </div>
                    <br />
                    <div>
                        <label>Hora de la cita:</label>
                        <br />
                        <input type='time' {...register('hora_consulta', { required: true })} style={inputStyle} />
                        {errors.hora_consulta && <span>La hora de consulta es requerida</span>}
                    </div>
                    <br />
                    
                </div>
                <input type='submit' value='Agendar Citas' style={buttonStyle} />
            </form>
            <br />
            <div>
                <button style={buttonStyle}>
                    <Link to={'/home'} style={{ color: '#000', textDecoration: 'none' }}>
                        Cancelar
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default AgendarCita;
