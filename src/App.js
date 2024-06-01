import "./App.css";
import Login from "./Views/Login";

import { Routes, Route } from "react-router-dom";
import Register from "./Views/Register";
import Dashboard from "./Views/Dashboard";
import { useContext, useEffect } from "react";

import { UserContext } from "./context/userContext";

function App() {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <Routes>
        {user?.id ? (
          <Route path="/">
            <Route path="/" index element={<Dashboard />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
