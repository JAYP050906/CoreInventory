import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ClothInventory from "./ClothInventory";
import Navigation from "./Navigation";

function App(){

const [isLoggedIn,setIsLoggedIn] = useState(false);
const [page,setPage] = useState("dashboard");

if(!isLoggedIn){
return <Login onLogin={()=>setIsLoggedIn(true)} />;
}

return(

<div>

<Navigation
goDashboard={()=>setPage("dashboard")}
goInventory={()=>setPage("inventory")}
logout={()=>setIsLoggedIn(false)}
/>

{page === "dashboard" && <Dashboard openInventory={()=>setPage("inventory")} />}

{page === "inventory" && <ClothInventory goBack={()=>setPage("dashboard")} />}

</div>

);

}

export default App;