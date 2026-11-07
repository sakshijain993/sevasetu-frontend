import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import "./Navbar.css";
import logo from "../../assets/sevasetu-logo.png";

function Navbar({ onLogin, onRegister }) {
    return (
        <nav>
              {/* SevaSetu Logo */}
            <Link to="/" className="logo">
                <img src={logo} alt="SevaSetu Logo" />

             
            </Link>

            

            <div>
                <Link to="/">Home</Link>
                <Link to="/organizations">Organizations</Link>
                <Link to="/needs">Needs</Link>

                <div className="community-dropdown">
                    <span className="community-title">
                        Community <ChevronDown size={16} />
                    </span>

                    <div className="community-dropdown-menu">
                        <Link to="/seva-heroes">Seva Heroes</Link>
                        <Link to="/support-network">Support Network</Link>
                        <Link to="/seva-support">Seva Support</Link>
                    </div>
                </div>

                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>

                <button className="nav-login-btn" onClick={onLogin}>
                    Login
                </button>

                <button className="nav-register-btn" onClick={onRegister}>
                    Register
                </button>
            </div>
        </nav>
    );
}

export default Navbar;