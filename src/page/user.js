import Accounts from "../components/account/account";
import Header from "../components/header/header";
import MainHeader from "../components/mainheader/mainheader";
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

function User(){
    const { user: currentUser } = useSelector((state) => state.auth);

 /* if (!currentUser) {
    return <Navigate to="/signin" />;
  }*/

    return(
        <div>
            <Header/>
            <main>
                <MainHeader userName={currentUser.email}/>
                <Accounts/>
            </main>
        </div>
    )
}

export default User