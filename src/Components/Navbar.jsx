import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
   return (

      <nav className="menu-container">
         {/* <!-- burger menu --> */}
         <input type="checkbox" aria-label="Toggle menu" />
         <span></span>
         <span></span>
         <span></span>
         {/* <!-- logo --> */}
         <Link to="/" className="menu-logo nav-title colors">
            FishHook
         </Link>
         {/* <!-- menu items --> */}
         <div className="menu  colors">
            <ul>
               <li>
                  <Link to={"/allcatches"}>All Catches</Link>
               </li>

               <li>
                  <Link to="/newcatch">New Catch</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default Navbar;
