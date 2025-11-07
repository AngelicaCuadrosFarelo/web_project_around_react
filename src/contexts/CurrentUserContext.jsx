import { createContext, useState } from "react";

const CurrentUserContext = createContext();

export default CurrentUserContext;

/*export function CurrentUserContextProvider({ children }) {
  const [user, setUser] = useState({
    name: "Jacques Cousteau",
    about: "Explorador",
    avatar:
      "https://images.pexels.com/photos/15591027/pexels-photo-15591027.jpeg",
    _id: "b5e3f3552e818cd3296db330",
  });

  return (
    <CurrentUserContext.Provider value={{ user, setUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
}*/
