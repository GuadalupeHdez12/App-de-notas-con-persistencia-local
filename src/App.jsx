import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePages from "./pages/HomePages";
import CreateNotePages from "./pages/CreateNotePages";
import EditNotePages from "./pages/EditNotePages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />}></Route>
        <Route path="/create" element={<CreateNotePages />}></Route>
        <Route path="/edit/:id" element={<EditNotePages />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
