# 📝 Gestor de Notas — App con Persistencia Local

Aplicación web para **crear, editar y eliminar notas** con persistencia en el navegador mediante `localStorage`. Construida con **React 19**, **Vite**, **React Router DOM** y **Tailwind CSS**, como práctica de React avanzado: manejo de formularios, eventos y Hooks.

---

## ✨ Características

- 📝 Crear, editar y eliminar notas
- 💾 Persistencia de datos con `localStorage` (las notas se conservan al recargar la página)
- 🧭 Navegación entre vistas con React Router DOM
- 🎣 Uso avanzado de Hooks de React (`useState`, `useEffect`, custom hooks)
- ⚡ Desarrollo rápido con Vite y Hot Module Replacement

---

## 🛠️ Tecnologías

| Tecnología | Versión | Uso |
|---|---|---|
| [React](https://react.dev/) | ^19.1.1 | UI y lógica de componentes |
| [Vite](https://vite.dev/) | ^7.1.7 | Bundler y servidor de desarrollo |
| [React Router DOM](https://reactrouter.com/) | ^7.9.5 | Navegación entre vistas |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.1.16 | Estilos utilitarios |

---

## 📁 Estructura del proyecto

```
App-de-notas-con-persistencia-local/
├── public/           # Archivos estáticos
├── src/              # Código fuente
│   ├── components/   # Componentes reutilizables
│   ├── hooks/        # Custom Hooks
│   ├── pages/        # Vistas / páginas
│   └── main.jsx      # Punto de entrada
├── index.html
├── vite.config.js
└── package.json
```

---

## ⚙️ Instalación

### 1. Clona el repositorio

```bash
git clone https://github.com/GuadalupeHdez12/App-de-notas-con-persistencia-local.git
cd App-de-notas-con-persistencia-local
```

### 2. Instala las dependencias

```bash
npm install
```

### 3. Inicia el servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 🧑‍💻 Comandos disponibles

```bash
# Servidor de desarrollo con HMR
npm run dev

# Compilar para producción
npm run build

# Vista previa del build de producción
npm run preview

# Ejecutar el linter
npm run lint
```

---

## 💡 Conceptos practicados

- Manejo de formularios controlados en React
- Escucha y gestión de eventos
- `useState` y `useEffect` para sincronizar estado con `localStorage`
- Custom Hooks para separar la lógica de negocio
- Navegación con React Router DOM v7

---

## 👩‍💻 Autora

**Guadalupe Hernández**  
[@GuadalupeHdez12](https://github.com/GuadalupeHdez12)
