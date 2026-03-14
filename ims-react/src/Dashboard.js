import React, { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard({ openInventory }) {

const [totalProducts,setTotalProducts] = useState(0);
const [lowStock,setLowStock] = useState(0);

useEffect(()=>{

const items = JSON.parse(localStorage.getItem("inventory")) || [];

setTotalProducts(items.length);

const low = items.filter(item => Number(item.qty) < 5);
setLowStock(low.length);

},[]);

return(

<div className="dashboard">

<h1>Inventory Dashboard</h1>
<p>Welcome to Inventory Management System</p>

<button onClick={openInventory}>
Open Cloth Inventory
</button>

<div className="cards">

<div className="card">
<h3>Total Products</h3>
<p>{totalProducts}</p>
</div>

<div className="card">
<h3>Low Stock</h3>
<p>{lowStock}</p>
</div>

<div className="card">
<h3>Pending Receipts</h3>
<p>0</p>
</div>

<div className="card">
<h3>Pending Deliveries</h3>
<p>0</p>
</div>

</div>

</div>

);

}

export default Dashboard;