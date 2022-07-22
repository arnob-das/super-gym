import React, { useState } from 'react';
import './Header.css'
import Logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'

const mobile = window.innerWidth <= 768 ? true : false;

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
        <div>
            <div className="header">
                <img className="logo" src={Logo} alt="" />

                {/* hamburger menu for mobile screen */}
                {menuOpened === false && mobile === true ?
                    (
                        <div
                            style={{
                                backgroundColor: 'var(--appColor',
                                padding: '0.5rem',
                                borderRadius: '5px'
                            }}

                            onClick={() => {
                                setMenuOpened(true);
                            }}
                        >
                            <img
                                style={{ width: '1.5rem', height: '1.5rem' }}
                                src={bars} alt="" />
                        </div>
                    )
                    : (
                        <ul className="header-menu">
                            <li onClick={() => setMenuOpened(false)}>Home</li>
                            <li onClick={() => setMenuOpened(false)}>Programs</li>
                            <li onClick={() => setMenuOpened(false)}>Why Us</li>
                            <li onClick={() => setMenuOpened(false)}>Plans</li>
                            <li onClick={() => setMenuOpened(false)}>Testimonials</li>
                        </ul>
                    )
                }


            </div>
        </div>
    );
};

export default Header;