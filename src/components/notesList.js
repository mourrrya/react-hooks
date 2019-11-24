import React,{useContext} from "react";
import Note from "./notesData";
import NoteContext from "../context/noteContext"

const NotesList = () => {
  
  const {notes}=useContext(NoteContext)

  return  notes.map(note => (
      <Note key={note.title} note={note} />
    ));
  
};

export { NotesList as default };
