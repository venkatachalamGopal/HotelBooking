import "./navbar.css";
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">
          <NavLink to="/" className="home">
            HotelBooking
          </NavLink>
        </span>
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
