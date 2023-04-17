import React, { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Note from "./components/Note/Note";
import content from "./Content";
import InputArea from "./components/InputArea/InputArea";

// const handleNotes = (note) => {
//   return <Note title={note.title} desc={note.description} />;
// };
// {content.map((handleNotes) => (
//   <Note
//     title={handleNotes.title}
//     desc={handleNotes.description}
//     key={handleNotes.key}
//   />
// ))}

const App = () => {
  const [notes, setNotes] = useState([]);
  const addNote = (newNote) => {
    //newNote btwdy ela input area comp
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />

      <div className="container">
        <div className="row">
          <InputArea onAdd={addNote} />
          {notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
