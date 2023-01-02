import Accounts from "../components/account/account";
import MainHeader from "../components/mainheader/mainheader";
import Header from "../components/header/header";

function User(){

    return(
        <>
            <Header/>
            <main className="main bg-darkpurple">
                <MainHeader/>
                <Accounts/>
            </main>
        </>
    )
}

export default User