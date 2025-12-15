import { Link } from "react-router-dom";
import NoteList from "../component/NoteList";
import { useEffect, useState } from "react";

function HomePages() {
  const [notes, setNotes] = useState([]);//guarda las notas
  const [searchTerm, setSearchTerm] = useState("");//guarada lo que escribes
  const [filterTag, setFilterTag] = useState("");//guarda la etiqueta
  const [darkMode, setDarkMode] = useState(false);//guarda el modo oscuro

  //
  useEffect(() => {
    //con el localStorage va al navegador y busca las notas guardadas
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    //con el JSON,Parse convierte el texto guardado en un arreglo de notas
    setNotes(savedNotes);
    
    // Cargar preferencia de modo oscuro
    //carga las preferencias de mogo oscuro
    const savedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(savedDarkMode);
    if (savedDarkMode) {
      document.body.classList.add("dark-mode");
    }
  }, []);//si no hay notas,usa un arreglo vacio

  
  const deleteNote = (index) => {
    const updateNotes = [...notes];
    updateNotes.splice(index, 1);
    setNotes(updateNotes);
    localStorage.setItem("notes", JSON.stringify(updateNotes));
  };

  //elimina una nota actualiza el almacenamiento
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.body.classList.toggle("dark-mode");//añada o quita la clase css
  };
//filtra las notas por lo que escribes o por los filtros
  const filteredNotes = notes.filter((note) => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      note.title?.toLowerCase().includes(searchLower) ||
      note.content?.toLowerCase().includes(searchLower);
    const matchesTag = filterTag === "" || note.tag === filterTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div>
      <div className="header-container">
        <h1 className="Titulo">Gestor de Notas</h1>
        
        {/* NUEVO: Toggle de modo oscuro */}
        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
      
      <div className="nota">
        <Link to="/create" className="crear-nota">
          Crear Nota
        </Link>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Buscar notas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-tags">
        <button
          className={`filter-btn ${filterTag === "" ? "active" : ""}`}
          onClick={() => setFilterTag("")}
        >
          Todas
        </button>
        <button
          className={`filter-btn ${filterTag === "trabajo" ? "active" : ""}`}
          onClick={() => setFilterTag("trabajo")}
        >
          💼 Trabajo
        </button>
        <button
          className={`filter-btn ${filterTag === "personal" ? "active" : ""}`}
          onClick={() => setFilterTag("personal")}
        >
          👤 Personal
        </button>
        <button
          className={`filter-btn ${filterTag === "ideas" ? "active" : ""}`}
          onClick={() => setFilterTag("ideas")}
        >
          💡 Ideas
        </button>
        <button
          className={`filter-btn ${filterTag === "importante" ? "active" : ""}`}
          onClick={() => setFilterTag("importante")}
        >
          ⭐ Importante
        </button>
        <button
          className={`filter-btn ${filterTag === "pendiente" ? "active" : ""}`}
          onClick={() => setFilterTag("pendiente")}
        >
          ⏰ Pendiente
        </button>
      </div>

      {(searchTerm || filterTag) && (
        <p className="results-count">
          {filteredNotes.length} {filteredNotes.length === 1 ? "resultado" : "resultados"}
        </p>
      )}

      <br />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
}

export default HomePages;