import React, { useState, useContext } from "react";
import NoteContext from "../context/noteContext";

const NotesForm = () => {
  const { noteDispatch:dispatch } = useContext(NoteContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const AddNotes = e => {
    e.preventDefault();
    // setNotes([...notes, { title, body }]);
    dispatch({ type: "ADD_NOTES", title, body });
    setTitle("");
    setBody("");
  };

  const addTitle = e => {
    setTitle(e.target.value);
  };

  const addBody = e => {
    setBody(e.target.value);
  };
  return (
    <form onSubmit={AddNotes}>
      <input value={title} onChange={addTitle} />
      <textarea value={body} onChange={addBody}></textarea>
      <button>submit</button>
    </form>
  );
};

export { NotesForm as default };
