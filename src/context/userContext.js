import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage({}, "user");

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};
