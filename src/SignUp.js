import React from 'react'
import signUp from "./img/signUp.svg"

export const SignUp = () => {
  return (
    <div className='userPage signUp'>
        <div className="svg">
        <img src={signUp} alt="" srcset="" />
        </div>
        <div className="container">
            <h2>Registrarse</h2>
            <div className="form">
                <div className="name">
                    <h3>Ingresa tu nombre:</h3>
                    <input className='textInput' placeholder='Tu nombre' type="text" name="name"/>
                </div>
                <div className="email">
                    <h3>Ingresa tu email:</h3>
                    <input className='textInput' type="email" placeholder='ejemplo@menestore.com'/>
                </div>
                <div className="password">
                    <h3>Ingresa tu contraseña:</h3>
                    <input className='textInput' type="password" placeholder='Contraseña'/>
                </div>
                <div className="password">
                    <h3>Confirma tu contraseña:</h3>
                    <input className='textInput' type="password" placeholder='Contraseña'/>
                </div>
                <div className="checkboxes">
                    <div className='terms'><input type="checkbox" name="Terms" id="" />Aceptar terminos y condiciones.</div>
                    <div className="captcha"><input type="checkbox" name="" id="" />Captcha</div>
                </div>
            </div>
            <div className="buttons">
                <button className='signInButton'>Registrarse</button>
            </div>
        </div>
  </div>
  )
}
