import React, { useState, useEffect } from "react";
import "./ClothInventory.css";

function ClothInventory({ goBack }) {

const [name,setName] = useState("");
const [size,setSize] = useState("");
const [qty,setQty] = useState("");
const [items,setItems] = useState([]);


useEffect(()=>{
const savedItems = JSON.parse(localStorage.getItem("inventory")) || [];
setItems(savedItems);
},[]);

useEffect(()=>{
localStorage.setItem("inventory", JSON.stringify(items));
},[items]);


function addItem(){

if(name === "" || size === "" || qty === ""){
alert("Please fill all fields");
return;
}

const newItem = {
name:name,
size:size,
qty:qty
};

setItems([...items,newItem]);

setName("");
setSize("");
setQty("");

}

function deleteItem(index){

const updatedItems = items.filter((item,i)=> i !== index);
setItems(updatedItems);

}

function editQty(index){

let newQty = prompt("Enter new quantity");

if(newQty){
const updatedItems = [...items];
updatedItems[index].qty = newQty;
setItems(updatedItems);
}

}

return(

<div className="inventory">

<h2>Clothing Inventory</h2>

<input
placeholder="Cloth Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Size"
value={size}
onChange={(e)=>setSize(e.target.value)}
/>

<input
placeholder="Quantity"
value={qty}
onChange={(e)=>setQty(e.target.value)}
/>

<br/>

<button onClick={addItem}>Add Item</button>

<button onClick={goBack}>Back</button>

<table>

<thead>
<tr>
<th>Name</th>
<th>Size</th>
<th>Quantity</th>
<th>Action</th>
</tr>
</thead>

<tbody>

{items.map((item,index)=>(

<tr key={index}>

<td>{item.name}</td>
<td>{item.size}</td>
<td>{item.qty}</td>

<td>

<button onClick={()=>editQty(index)}>Edit</button>

<button onClick={()=>deleteItem(index)}>Delete</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

);

}

export default ClothInventory;