import logo from "../../assets/argentBankLogo.png"
import { useDispatch, useSelector } from "react-redux";

function Header(){


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
      {true ? (
      <div className="navbar-nav ml-auto">
                <a href="/user" className="main-nav-item">
                  Tony
                </a>
                <a href="/signin" className="main-nav-item">
                  LogOut
                </a>
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