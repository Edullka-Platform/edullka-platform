import React from "react";
import { Routes, Route, Router } from "react-router-dom";

import { Landing } from "./pages/Landing";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";

function App(): JSX.Element {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/perfil" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
