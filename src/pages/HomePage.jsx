import React, { useRef } from 'react';
import { setTrainerName } from '../store/slices/trainerName.slice';
import { useDispatch } from 'react-redux';
import { current } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import './styles/homePage.css';


const HomePage = () => {

    const dispatch = useDispatch();


    const navigate = useNavigate();
    const textInput = useRef();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch( setTrainerName(textInput.current.value.trim()));
        navigate('/Pokedex');

    }


    return (
        <div className='container_bienvenida'>
            <img src="/src/imagenes/pokedex.jpg" alt="Titulo" />
            <h1 className='titulo2'>¡Hola Entrenador!</h1>
            <h2>Para poder comenzar,  dame tu nombre</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={textInput} placeholder='Tu Nombre' />
                <button className='btn_bienvenida'>Comenzar</button>
            </form>
        </div>
    )
}

export default HomePage;