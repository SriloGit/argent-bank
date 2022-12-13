import React from "react";

function MainHeader(userName) {
  
  return (
    <div className="header">
      <h1>
        Welcome back {userName}
        <br />
      </h1>
      <button>
        Edit Name
      </button>
      <form>
        <div className="edit-firstName">
          <input/>
          <button>
            Save
          </button>
        </div>
        <div className="edit-lastName">
          <input/>
          <button>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default MainHeader;