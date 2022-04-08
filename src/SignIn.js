import React from 'react'
import login from "./img/login.svg"

export const SignIn = () => {
  return (
    <div className='userPage'>
      <div className="svg">
        <img src={login} alt="" srcset="" />
      </div>
      <div className="container">
        <h2>Inicia sesión</h2>
        <div className="form">
          <div className="email">
            <h3>Ingresa tu email:</h3>
            <input className='textInput' type="email" placeholder='ejemplo@menestore.com'/>
          </div>
          <div className="password">
            <h3>Ingresa tu contraseña:</h3>
            <input className='textInput' type="password" placeholder='Contraseña'/>
          </div>
        </div>
        <div className="buttons">
          <button className='signInButton'>Iniciar sesion</button>
        </div>
      </div>
    </div>
  )
}
