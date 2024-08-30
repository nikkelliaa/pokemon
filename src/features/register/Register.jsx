import React, { useState } from 'react';
import cls from './Register.module.scss'

const Register = () => {
    const [username, setUsername] =useState('')
    const [password, setPassword] =  useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const date = new Date()
    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match')
            return
        }

        const userDate = {
            username: username,
            password: password,
        }
        fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userDate),
        })
            .then((response) => response.json())
            .then((data) => {
                if (date.success) {
                    console.log('Registration successful:', data)
                }
                else {
                    setErrorMessage(data.message)
                }
            })
            .catch((error) => {
                console.log('Error', error)
                setErrorMessage('Something went wrong. Please try again later.')
            })
    }

    return (
            <div className={cls.register_container}>
                <h2>Войти в учётную запись Клуба Тренеров Покемонов</h2>
                {errorMessage && <p className={cls.error}>{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Имя пользователя</label>
                        <input type="text"
                               id="username"
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}
                               required/>
                    </div>
                    <div>
                        <label htmlFor="password">Пароль</label>
                        <input type="password"
                               id="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               required/>
                    </div>
                    <button type={handleSubmit}>Вход</button>
                </form>
            </div>

    );

}

export default Register;