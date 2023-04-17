import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import "./InputArea.css";

const InputArea = (props) => {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const submitNote = (e) => {
    props.onAdd(note); //note gya mn l app
    setNote({
      title: "",
      content: "",
    });
    e.preventDefault();
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div className="area mb-5 text-center col-md-12">
      <form>
        {isExpanded ? (
          <div className="col-md-12">
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
            />
          </div>
        ) : null}

        <textarea
          rows={isExpanded ? 5 : 2}
          cols="50"
          placeholder="Content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          name="content"
          
        ></textarea>
        <Zoom in={isExpanded}>
            <Fab onClick={submitNote} className="button">
              <AddIcon />
            </Fab>
          </Zoom>
      </form>
    </div>
  );
};

export default InputArea;
