import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalContext } from "../../../context/GlobalProvider";
import image from '../../../shared/assets/images/logo.png';
import "./styles.scss";

import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

// import component 👇
import Drawer from 'react-modern-drawer';
//import styles 👇
import 'react-modern-drawer/dist/index.css';

const Navbar = () => {
    const navigate = useNavigate();

    const {
        authState: {
            user
        },
        authDispatch
    } = useContext(GlobalContext);

    const handleLogout = () => {
        authDispatch({ type: "LOGOUT" });
        toast.dismiss();
        navigate("/login");
    }

    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <nav className="navbar" style={{ position: 'sticky', width: "100%" }}>
            <div className="brand-title" onClick={() => navigate('/')}>
                <img width="55px" height="55px" style={{ borderRadius: '50%' }} src={image} alt='icon' />
                <h1 className="title">
                    RED LION
                </h1>
            </div>
            <div className="navbar-links">
                <ul className="nav-area">
                    <div className="dropdown ">
                        <li className="navbar-list">
                            {/* <img width="55px" height="55px" style={{ borderRadius: '50%' }} src='https://picsum.photos/200/200' id="Avatar" /> */}
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ display: "flex", justifyContent: "flex-end" }}
                                onClick={toggleDrawer}
                            >
                                <MenuIcon sx={{ fontSize: "35px" }} />
                            </IconButton>
                        </li>
                        <Drawer
                            open={isOpen}
                            onClose={toggleDrawer}
                            direction='right'
                            className='drawer'
                        >
                            <div className='drawer-content'>
                                <h1 className="drawer-header">Welcome {user.name.split(' ')[0]}</h1>
                                <div className="seperator" />
                                <li className="navbar-list"><a className="cool-link" onClick={() => navigate('/')}>Home</a></li>
                                <li className="navbar-list"><a className="cool-link" onClick={() => navigate('/predict-facebook-compaign')}>Earnings</a></li>
                                <div className="seperator" style={{ opacity: 0.5 }} />
                                <li className="navbar-list"><a className="cool-link">Profile</a></li>
                                <li className="navbar-list"><a className="cool-link">Settings</a></li>
                                <li className="navbar-list"><a className="cool-link" onClick={handleLogout}>Logout</a></li>
                            </div>
                        </Drawer>
                    </div>
                </ul>
            </div>

        </nav>
    );
}


export default Navbar;