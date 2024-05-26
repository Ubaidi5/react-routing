import "./App.css";
import Login from "./Views/Login";

import { Routes, Route } from "react-router-dom";
import Register from "./Views/Register";
import Dashboard from "./Views/Dashboard";
import { useEffect, useState } from "react";
import Header from "./components/header";
import { UserContext } from "./context/userContext";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const parsed_user = JSON.parse(localStorage.getItem("user"));
    setUser(parsed_user);
  }, []);

  return (
    <div>
      <UserContext.Provider value={[user, setUser]}>
        <Routes>
          {user.id ? (
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
