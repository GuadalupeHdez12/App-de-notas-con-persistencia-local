import NoteForm from "../component/NoteForm";

function CreateNotePages() {
  const saveNote = (note) => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || []
    savedNotes.push(note)
    localStorage.setItem("notes", JSON.stringify(savedNotes))
  };

  return <NoteForm onSubmit={saveNote}></NoteForm>;
}

export default CreateNotePages;
