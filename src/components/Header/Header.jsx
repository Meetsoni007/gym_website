import React, { useEffect, useRef } from 'react'
import '../../Styles/header.css'
import logo from '../../assets/img/logo.png'
import MenuIcon from '@mui/icons-material/Menu';

const nav_link = [
    {
        path: "#home",
        display: "home"
    },
    {
        path: "#schedule",
        display: "Schedule"
    },
    {
        path: "#classes",
        display: "Classes"
    },
    {
        path: "#pricing-plan",
        display: "Pricing"
    },
]

function Header() {

    const headerRef = useRef(null);

    const headerFunc = () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            headerRef.current.classList.add('sticky_header')
        } else {
            headerRef.current.classList.remove('sticky_header')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFunc);
        return () => window.removeEventListener('scroll'.headerFunc);
    }, [])

    const handleClick = (e) => {
        e.preventDefault()
        const targrtAttr = e.target.getAttribute('href')
        const location = document.querySelector(targrtAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        })
    }


    return (

        <header className='header' ref={headerRef} >
            <div className="container">
                <div className="nav_wrapper">
                    <div className="logo">
                        <div className="logo_img">
                            <img src={logo} alt='Logo' />
                        </div>
                        <h2>FitBody</h2>
                    </div>
                    {/* Navigation Menus */}
                    <div className="navigation">
                        <ul className="menu">
                            {
                                nav_link.map((item, i) => (
                                    <li key={i} className="nav_item"><a onClick={handleClick} href={item.path}>{item.display}</a></li>
                                ))
                            }

                        </ul>
                    </div>

                    {/* Navbar Right */}

                    <div className="nav_right">
                        <button className='register_button' > Register </button>
                        <span className="mobile_menu">
                            <MenuIcon />
                        </span>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header
