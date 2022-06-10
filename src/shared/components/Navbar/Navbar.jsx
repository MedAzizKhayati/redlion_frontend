import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalProvider";
import image from '../../../shared/assets/images/logo.png';
import "./styles.scss";

const Navbar = () => {
    const navigate = useNavigate();

    const {
        authState: {
            isAuthenticated,
            user
        },
        authDispatch
    } = useContext(GlobalContext);

    const handleLogout = () => {
        authDispatch({ type: "LOGOUT" });
        navigate("/login");
    }

    return (
        <nav className="navbar" style={{ position: 'sticky', width: "100%" }}>
            <div className="brand-title">
                <img width="55px" height="55px" style={{ borderRadius: '50%' }} src={image} id="Avatar" />
                <h1 className="title">
                    RED LION
                </h1>
            </div>
            <div className="navbar-links">
                <ul className="nav-area">
                    <li className="navbar-list"><a className="cool-link" onClick={() => navigate('/')}>Home</a></li>
                    <li className="navbar-list"><a className="cool-link" onClick={() => navigate('/form')}>Earnings</a></li>
                    <div className="dropdown ">
                        <li className="navbar-list">
                            <img width="55px" height="55px" style={{ borderRadius: '50%' }} src='https://picsum.photos/200/200' id="Avatar" />
                        </li>
                        <div className="dropdown-content">
                            <li className="navbar-list"><a className="cool-link">Profile</a></li>
                            <li className="navbar-list"><a className="cool-link">Settings</a></li>
                            <li className="navbar-list"><a className="cool-link" onClick={handleLogout}>Logout</a></li>
                        </div>
                    </div>
                </ul>
            </div>

        </nav>
    );
}


export default Navbar;