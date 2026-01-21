import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
       
      </Routes>

       <h1><b>Welcome to The BugFixer Project</b></h1>
    </BrowserRouter>
  );
}

export default App;
