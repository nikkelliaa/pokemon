import React from 'react';
import cls from '../mainStyles/mainStyles.module.scss'

const MainStyles = () => {
    return (
        <div>
            <section className={cls.section}>
                <div className={cls.leftShadow}></div>
                <div className={cls.rightShadow}></div>
            </section>

        </div>
    );
};

export default MainStyles;