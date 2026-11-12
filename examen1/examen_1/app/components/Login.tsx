'use client';

import { useState } from 'react';

export default function Login() {

    const [usuario, setUsuario] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [error, setError] = useState('');

    function iniciarSesion() {

        if (usuario === 'admin' && contrasena === 'admin123') {
            localStorage.setItem('sesion', 'activa');
            window.location.reload();
        } else {
            setError('Usuario o contraseña incorrectos');
        }

    }

    return (
        <div className="login">
            <h1>Administrador de Gastos</h1>

            <h2>Iniciar sesión</h2>

            <input
                type="text"
                placeholder="Usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}/>

            <input
                type="password"
                placeholder="Contraseña"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}/>

            <button onClick={iniciarSesion}>
                Ingresar
            </button>

            <p>{error}</p>
        </div>
    );
}