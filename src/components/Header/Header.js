import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
                            <li onClick={() => setMenuOpened(false)}>
                                <Link
                                    to="hero"
                                    span="true"
                                    smooth={true}
                                    activeClass="actove"
                                    onClick={() => setMenuOpened(false)}
                                >Home</Link>
                            </li>
                            <li onClick={() => setMenuOpened(false)}>
                                <Link
                                    to="programs"
                                    span="true"
                                    smooth={true}
                                    onClick={() => setMenuOpened(false)}
                                >Programs</Link>
                            </li>
                            <li onClick={() => setMenuOpened(false)}>
                                <Link
                                    to="reasons"
                                    span="true"
                                    smooth={true}
                                    onClick={() => setMenuOpened(false)}
                                >Why Us</Link>
                            </li>
                            <li onClick={() => setMenuOpened(false)}>
                                <Link
                                    to="plans"
                                    span="true"
                                    smooth={true}
                                    onClick={() => setMenuOpened(false)}
                                >Plans</Link>

                            </li>
                            <li>
                                <Link
                                    to="testimonials"
                                    span="true"
                                    smooth={true}
                                    onClick={() => setMenuOpened(false)}
                                >Testimonials</Link>
                            </li>
                        </ul>
                    )
                }


            </div>
        </div>
    );
};

export default Header;