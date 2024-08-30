import React from 'react';
import RegisterButton from "../../widgets/RegisterButton";

const Layout = ({children}) =>  {
        return (
            <div>
                <RegisterButton/>
                <main>{children}</main>
            </div>
        );
}

export default Layout;