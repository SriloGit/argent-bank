import logo from "../../assets/argentBankLogo.png"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/auth";
import { useCallback } from "react";
import { Link } from "react-router-dom"
import { resetUserProfile } from "../../slices/profile";

function Header(){

  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth);
  const name = useSelector((state)=>state.profile.firstName)

  const logOut = useCallback(() => {
    dispatch(logout());
    dispatch(resetUserProfile())
  }, [dispatch]);

    return(
      
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
      <img
        className="main-nav-logo-image"
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
      {isLoggedIn ? (
      <div className="navbar-nav ml-auto">
                <Link to="/user" className="main-nav-item">
                {name}
                </Link>
                <Link href="/signin" className="main-nav-item" onClick={logOut}>
                  LogOut
                </Link>
            </div>
      ) : (
        <div>
          <a className="main-nav-item" href="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
    )}    
    </nav>
    )
}

export default Header