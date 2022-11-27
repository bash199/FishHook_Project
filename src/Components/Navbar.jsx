import "./Navbar.css";
import {Link} from "react-router-dom";
// import styled from "styled-components";
// const Nav = styled.nav`
//    width: 100%;
//    height: 5rem;
//    display: flex;
//    justify-content: space-between;
//    align-items: center;
//    margin-bottom: 10px;
//    background-color: white;
//    -webkit-box-shadow: 0px 10px 20px 0px rgba(62, 66, 66, 0.22);
//    -moz-box-shadow: 0px 10px 20px 0px rgba(62, 66, 66, 0.22);
//    box-shadow: 0px 10px 20px 0px rgba(62, 66, 66, 0.22);
// `;

// const LinksDiv = styled.div`
//    width: 25%;
//    display: flex;
//    justify-content: space-around;
// `;
// const Ul = styled.ul`
//    padding: 0 10px;
//    width: 100%;
//    display: flex;
//    justify-content: space-between;
//    text-decoration: none;
//    list-style: none;
// `;
const Navbar = () => {
   return (
      // <Nav>
      //    <Ul>
      //       <li>
      //          <Link  className="links " to={"/"}>
      //             <h4>Logo</h4>
      //          </Link>
      //       </li>
      //       <LinksDiv>
      //          <li>
      //             <Link className="links" to={"/allcatches"}>
      //                <h4>All Catches</h4>
      //             </Link>
      //          </li>
      //          <li>
      //             <Link className="links" to={"/newcatch"}>
      //                <h4>New Catch</h4>
      //             </Link>
      //          </li>
      //       </LinksDiv>
      //    </Ul>
      // </Nav>
      <nav className="menu-container">
         {/* <!-- burger menu --> */}
         <input type="checkbox" aria-label="Toggle menu" /> 
         <span></span>
         <span></span>
         <span></span> 
          {/* <!-- logo --> */}
         <Link to="/" className="menu-logo">
            <img
               src="https://img.icons8.com/cute-clipart/64/null/shoes.png"
               alt="img"
            />
         </Link>
         {/* <!-- menu items --> */}
         <div className="menu">
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
