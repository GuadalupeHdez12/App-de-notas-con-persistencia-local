//Este componente muestra todas las notas que se crearon en forma de tarjetas
import { Link } from "react-router-dom";

function NoteList({ notes, deleteNote }) {

  const tagColors = {//son diccionarios que aignan colores especificos
    trabajo: "#3498db",
    personal: "#e74c3c",
    ideas: "#f39c12",
    importante: "#9b59b6",
    pendiente: "#1abc9c",
    otro: "#95a5a6"
  };

  const noteColors = {//son diccionarios que aignan colores especificos
    default: "#ffffff",
    blue: "#e3f2fd",
    green: "#e8f5e9",
    yellow: "#fff9c4",
    pink: "#fce4ec",
    purple: "#f3e5f5"
  };

  return (
    <div className="notas-grid">
      {/* esto nos dice si no hay notas muestra el mensaje,sino muestra las notas */}
      {notes.length === 0 ? (
        <p className="no-notas">No hay notas disponibles. ¡Crea tu primera nota!</p>
      ) : (
        notes.map((note, index) => (
          <div 
            key={index} 
            className="nota-lista"
            style={{ backgroundColor: noteColors[note.color] || "#ffffff" }}
          >
            {note.tag && (
              <span 
                className="nota-tag"
                style={{ backgroundColor: tagColors[note.tag] }}
              >
                {note.tag}
              </span>
            )}
            
            <h2>{note.title}</h2>
            <p>{note.content.length > 150 
              ? note.content.substring(0, 150) + "..." 
              : note.content}
            </p>
            
            {note.date && (
              <small className="nota-fecha">📅 {note.date}</small>
            )}
            
            <div className="nota-acciones">
              <Link to={`/edit/${index}`} className="btn-editar">
                Editar
              </Link>
              <button onClick={() => deleteNote(index)} className="btn-eliminar">
                Eliminar
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default NoteList;