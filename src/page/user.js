import Accounts from "../components/account/account";
import MainHeader from "../components/mainheader/mainheader";
import React, { useState, useEffect } from "react";
import UserService from "../services/user.service";
import Header from "../components/header/header";

function User(){
    const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

    return(
        <div>
            <Header/>
            <main className="main bg-darkpurple">
                <MainHeader userName="Tony"/>
                <Accounts/>
            </main>
        </div>
    )
}

export default User