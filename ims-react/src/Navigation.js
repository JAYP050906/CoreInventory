import React from "react";
import "./Navigation.css";

function Navigation({ goDashboard, goInventory, logout }) {

return (

<div className="nav">

<h2>IMS System</h2>

<div className="nav-buttons">

<button onClick={goDashboard}>
Dashboard
</button>

<button onClick={goInventory}>
Inventory
</button>

<button onClick={logout}>
Logout
</button>

</div>

</div>

);

}

export default Navigation;