import logo from "../../assets/argentBankLogo.png"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/auth";
import { useCallback } from "react";

function Header(){

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  if (currentUser) {
    return (
    <nav className="main-nav">
    <a className="main-nav-logo" href="./">
      <img
        className="main-nav-logo-image"
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className="sr-only">Argent Bank</h1>
    </a>
    <div>
        <a className="main-nav-item" href="./user.html">
          <i className="fa fa-user-circle"></i>
          {currentUser.email}
        </a>
        <a className="main-nav-item" href="./index.html" onClick={logOut}>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </a>
      </div>
  </nav>);
  }

    return(
        <nav className="main-nav">
        <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="./signin">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
    )
}

export default Header