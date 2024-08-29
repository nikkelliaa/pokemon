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
            <div className={cls.register_container}>
                <h2>Войти в учётную запись Клуба Тренеров Покемонов</h2>
                {errorMessage && <p className={cls.error}>{errorMessage}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="text"
                               id="username"
                               value={username}
                               onChange={(e) => setUsername(e.target.value)}
                               placeholder="Имя пользователя"
                               required
                               style={{
                                   background: '#544a4a',
                                   width: '300px',
                                   height: '40px',
                                   border: 'none',
                                   borderRadius: '7px',
                                   margin: '8px'
                               }}
                        />
                    </div>
                    <div>
                        <input type="password"
                               id="password"
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                               placeholder="Пароль"
                               required
                               style={{
                                   background: '#544a4a',
                                   width: '300px',
                                   height: '40px',
                                   borderRadius: '7px',
                                   border: 'none',
                                   marginBottom: '50px'
                               }}
                        />
                    </div>
                    <button type={handleSubmit} className={cls.submit}>Вход</button>
                    <div>
                        <p>Нет учетной записи?</p>
                        <button className={cls.button}>Создай учетную запись</button>
                    </div>
                </form>
            </div>

        </div>

    );

}

export default Register;