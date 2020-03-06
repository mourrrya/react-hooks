import React, { useEffect, useReducer } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import notesReducer from "./reducer/noteReducer";
import NotesList from "./components/notesList";
import NotesForm from "./components/notesForm";
import NoteContext from "./context/noteContext";

//i am adding a comment

const App = () => {
  const [notes, noteDispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));

    if (notes) {
      console.log("get data");
      noteDispatch({ type: "PRODUCE_Notes", notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  });

  return (
    <NoteContext.Provider value={{ notes, noteDispatch }}>
      <div>
        <h1>Notes</h1>
        <NotesList />
      </div>
      <h4>Add notes</h4>
      <NotesForm />
    </NoteContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
