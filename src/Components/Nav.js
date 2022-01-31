//import browser router component(maybe layout) 
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav><center>
        <ul className="nav-links">
            <Link to="home" className="link">Home</Link>
            <Link to="recipes" className="link">Search by Letter</Link>
            <Link to="randomRecipes" className="link">Recipes</Link>
            <Link to="about" className="link">About</Link>
            <Link to="contact" className="link">Contact Us</Link>
            <h3 className="PageTitle">Welcome to Cultural Bites!</h3>
        </ul>
        </center></nav>
  )
}

export default Nav;
