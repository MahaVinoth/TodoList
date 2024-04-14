import React from "react";

function TodoDetails({
    id,
    Name,
    Desc,
    Status,
    deleteProduct,
  editProduct,
  }) {
    if(id !== 0){
    return <>
    <div id={id} style={{margin: 16, padding: 16, textAlign: "center",backgroundColor:"#90ee9038",borderRadius:"5px",width:"30rem"}}>
        <div style={{display:"flex",flexDirection:"column",textAlign:"left",gap:"0.5rem"}}>
            <h5>Name : {Name}</h5>
            <p>Description : {Desc}</p>
            <p>Status : <button type="button" className="btn btn-success">{Status}</button></p>
        </div>
        <div className="editDeleteTodo">
            <button className="btn btn-success" onClick={() => editProduct(id)}>Edit</button>
            <button className="btn btn-danger" onClick={() => deleteProduct(id)}>Delete</button>
        </div>
    </div>
    </>
}
  else{
    return<>No ToDo Available.....</>
  }
}

export default TodoDetails;