import React from 'react'

const LoginSection = () => {
    return (
        <div className='dados-section'>
            <section className='card-login'>
                <h2>Login</h2>

                <div className='input-section'>
                    <label>Email</label>
                    <input type='email' placeholder='Digite seu email'></input>
                </div>

                <div className='input-section'>
                    <label>Senha</label>
                    <input type='password' placeholder='Digite sua senha'></input>
                </div>

                <button className='button'>Entrar</button>
            </section>
        </div>
    )
}

export default LoginSection