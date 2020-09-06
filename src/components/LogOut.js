import React from "react";

function LogOut(props) {
  return (
    <div>
      <h2>Are you sure you want to Log Out?</h2>

      <form>
        <input value="Log Out" type="submit" onClick={props.handleLogOut} />
      </form>
    </div>
  );
}

export default LogOut;
