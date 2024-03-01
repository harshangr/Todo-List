import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";

function ToDoList(props) {

    // function DeleteItem(){
    //    console.log("deleted");
    // }

    return (
        <>
            <div className="todo_style">
            <i className="fas fa-times-circle" onClick={() => {
                props.onSelect(props.id) 
            }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default ToDoList;