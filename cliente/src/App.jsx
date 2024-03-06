
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AgendarCita from './Componentes/Agendar/Agendar';
import VisualizarCitas from "./Componentes/Editar/Editar";
import Home from './Componentes/Home/Home';
import EditarCita from './Componentes/Edditarcitas/EditarCita';
import RegisterForm from './Componentes/Login/RegisterForm'; 
import LoginForm from './Componentes/Login/LoginForm'; 
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Routes>
    
      <Route path="/" element={< RegisterForm/>} />
      <Route path="/inicio-sesion" element={<LoginForm />} />
      <Route path="/home" element={< Home/>} />
      <Route path="/crear" element={<AgendarCita />} />
      <Route path="/editar" element={<VisualizarCitas />} /> 
      <Route path="/editar/:id" element={<EditarCita />} />
      <Route path="/borrar/:id" />
      
    </Routes>
  );
}

export default App;






