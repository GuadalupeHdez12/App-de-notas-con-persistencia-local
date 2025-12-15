import { useState, useEffect } from "react";
import NoteForm from "../component/NoteForm";
import { useParams } from "react-router-dom";

function EditNotePages() {
  const { id } = useParams();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || []
    setInitialData(savedNotes[id])
  }, []);

  const updateNote = (updateNote) => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes[id] = updateNote;
    localStorage.setItem("notes", JSON.stringify(savedNotes));
  };

  return initialData ? (
    <NoteForm onSubmit={updateNote} initialData={initialData} />
  ) : (
    <p>Cargando....</p>
  );
}

export default EditNotePages;
