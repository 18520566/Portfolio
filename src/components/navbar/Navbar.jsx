import React from 'react'
import "./navbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function Navbar({menuOpen, setMenuOpen}) {
    return (
        <div className={'navbar ' +(menuOpen && 'active') }>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>
                        hwang. 
                    </a>
                    <div className="itemContainer">
                        <PersonIcon className='icon'/>
                        <span>0934236606</span>
                    </div>
                    <div className="itemContainer">
                        <MailIcon className='icon'/>
                        <span>tiendat.hoang192@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
