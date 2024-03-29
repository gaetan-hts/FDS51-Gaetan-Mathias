/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import expencesReducer from "../reducer/expensesReducer.jsx";

const expencesContext = createContext();

export const useExpencesContext = () => useContext(expencesContext);

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = expencesReducer();

  return (
    <expencesContext.Provider value={{ state, dispatch }}>
      {children}
    </expencesContext.Provider>
  );
};

export default TodoContextProvider;
