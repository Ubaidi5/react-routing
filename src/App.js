import "./App.css";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Views/Login";
import Register from "./Views/Register";
import Dashboard from "./Views/Dashboard";
import RecipeDetail from "./Views/RecipeDetail";

import { UserContext } from "./context/userContext";

function App() {
  const [user, setUser] = useContext(UserContext);

  return (
    <div>
      <Routes>
        {user?.id ? (
          <Route path="/">
            <Route path="/" index element={<Dashboard />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
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
