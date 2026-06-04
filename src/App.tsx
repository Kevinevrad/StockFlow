import "./App.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from "./pages/Login";
import GetNewPass from "./pages/GetNewPass";
import { Dashboard } from "./pages/Dashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<GetNewPass />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
