import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import "./Note.css";

const Note = (props) => {
  const handleDelete = () =>{
    props.onDelete(props.id);
  }
  return (
    <div className="col-3">
      <div className="note">
        <h1> {props.title} </h1>
        <p>{props.content}</p>
        <button onClick={handleDelete}>
          <DeleteIcon />
        </button>
      </div>
      
    </div>
  );
};

export default Note;
