import React from 'react';
import cls from './registerButton.module.scss';
import Search from '../../assets/icon_search.svg';

const RegisterButton = () => {
    return (
        <div className={cls.buttonRegister}>
            <button className={cls.button}>Log in</button>
            <div className={cls.iconContainer}>
                <img src={Search} alt="Search Icon" className={cls.image_icon} />
            </div>
        </div>
    );
}

export default RegisterButton;
