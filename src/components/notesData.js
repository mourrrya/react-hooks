import React, { useEffect, useContext } from "react";
import NoteContext from "../context/noteContext";

const Note = ({ note }) => {
  const { noteDispatch } = useContext(NoteContext);

  const removeNote = title => {
    noteDispatch({type: "REMOVE_NOTE", title})
  };

  useEffect(() => {
    return () => {
      console.log("cleaning up");
    };
  }, []);

  return (
    <div>
      <h3>{note.title}</h3>
      <h6>{note.body}</h6>
      <button onClick={() => removeNote(note.title)}>X</button>
    </div>
  );
};

export { Note as default };
