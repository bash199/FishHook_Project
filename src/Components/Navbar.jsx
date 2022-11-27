import {Link} from "react-router-dom";
import styled from "styled-components";
const Nav = styled.nav`
   width: 100%;
   height: 5rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 10px;
   background-color: aqua;
`;
// const LogoDiv = styled.ul`
//    margin: 0 10px;
// `;
// const LinksDiv = styled.div`
//    margin: 0 10px;
// `;
const Ul = styled.ul`
   padding: 0 10px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   text-decoration: none;
   list-style: none;
`;
const Navbar = () => {
   return (
      <Nav>
         {/* <LogoDiv>
            <Link className="links" to={"/"}>
               <h4>Logo</h4>
            </Link>
         </LogoDiv> */}
         {/* <LinksDiv>
            <Link className="links" to={"/posts"}>
               <h4>All Catches</h4>
            </Link>
         </LinksDiv> */}
         <Ul>
            <li>
               <Link className="links" to={"/"}>
                  <h4>Logo</h4>
               </Link>
            </li>
            <li>
               <Link className="links" to={"/allcatches"}>
                  <h4>All Catches</h4>
               </Link>
            </li>
            <li>
               <Link className="links" to={"/newcatch"}>
                  <h4>New Catch</h4>
               </Link>
            </li>
         </Ul>
      </Nav>
   );
};

export default Navbar;

// function logOutClick() {

//     UserModel.logout(props)
//     .then((res) => {
//         props.setUser({});
//         localStorage.clear();
//     })
// }

// function confirmLogOut () {
//     const confirmLogOut = window.confirm('are you sure you want to log out?');
//     if (confirmLogOut === true) return logOutClick();
// }

// function loginNav() {
//     if(!props.user.username) {
//         return (
//             <>
//                 <li className="nav-item active">
//                     <Link className="nav-link" to="/login">Log In</Link>
//                 </li>
//                 <li className="nav-item active">
//                     <Link className="nav-link" to="/signup">Sign Up</Link>
//                 </li>
//             </>
//         )
//     } else {
//         return (
//             <>
//             <li className="nav-item ">
//                 <Link className="nav-link" to="/" onClick={confirmLogOut}>Log Out</Link>
//             </li>
//             </>
//         )
//     }
// }

// function renderCreatePost() {
//     if(props.user.username) {
//         return (
//             <>
//                 <li className="nav-item active">
//                     <Link className="nav-link" to='/posts/new'>New Catch</Link>
//                 </li>
//             </>
//         )
//     }
// }

// function renderProfileImg () {
//     if (props.user.username) {
//         return (
//             <Link to={`/users/${props.user._id}`}>
//                 <img src={props.user.picture} alt="profile" className="navbar-user-img"/>
//             </Link>
//         )
//     }
// }
