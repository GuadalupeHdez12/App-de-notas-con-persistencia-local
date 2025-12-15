//Este componente es un formulario donde el usuario puede escribir y guardar notas
import { useState } from "react";
import { useNavigate } from "react-router-dom";//Nos permite navegar entre paginas de la app

function NoteForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState(initialData?.title || "");//crea cajitas donde guardas la informacion
  const [content, setContent] = useState(initialData?.content || "");
  const [tag, setTag] = useState(initialData?.tag || "");
  const [color, setColor] = useState(initialData?.color || "default");
  const navigate = useNavigate();

  //cuando presionas guardar esta funcion toma los datos
  const handleSubmit = (e) => {
    e.preventDefault();//evita que la pagina se recarge
    onSubmit({ 
      title, 
      content, 
      tag,
      color,
      date: new Date().toLocaleDateString() 
    });
    navigate("/");//te lleva a la pagina principal
  };

  // Colores disponibles para las notas
  //es una lista de colores disponibles para pintar las notas
  const noteColors = [
    { name: "default", value: "#ffffff", label: "Blanco" },
    { name: "blue", value: "#e3f2fd", label: "Azul" },
    { name: "green", value: "#e8f5e9", label: "Verde" },
    { name: "yellow", value: "#fff9c4", label: "Amarillo" },
    { name: "pink", value: "#fce4ec", label: "Rosa" },
    { name: "purple", value: "#f3e5f5", label: "Morado" },
  ];

  //formulario
  return (
    <form onSubmit={handleSubmit} className="note-form-container">
      <h2 className="form-title">
        {initialData ? "Editar Nota" : "Crear Nueva Nota"}
      </h2>
      
      <div className="form-group">
        <label htmlFor="title" className="form-label">
          Título
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input"
          placeholder="Escribe el título de tu nota"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="content" className="form-label">
          Contenido
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-textarea"
          placeholder="Escribe el contenido de tu nota aquí"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="tag" className="form-label">
          Etiqueta
        </label>
        <select
          id="tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          className="form-select"
        >
          <option value="">Sin etiqueta</option>
          <option value="trabajo">💼 Trabajo</option>
          <option value="personal">👤 Personal</option>
          <option value="ideas">💡 Ideas</option>
          <option value="importante">⭐ Importante</option>
          <option value="pendiente">⏰ Pendiente</option>
          <option value="otro">📌 Otro</option>
        </select>
      </div>

      {/* Selector de color para la nota */}
      <div className="form-group">
        <label className="form-label">
          🎨 Color de la nota
        </label>
        <div className="color-picker">
          {noteColors.map((c) => (
            <button
              key={c.name}
              type="button"
              className={`color-option ${color === c.name ? "selected" : ""}`}
              style={{ backgroundColor: c.value }}
              onClick={() => setColor(c.name)}
              title={c.label}
            >
              {color === c.name && "✓"}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className="form-button">
        Guardar Nota
      </button>
    </form>
  );
}

export default NoteForm;