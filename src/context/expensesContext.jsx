/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import expensesReducer from "../reducer/expensesReducer.jsx";

const expensesContext = createContext();

export const useExpensesContext = () => useContext(expensesContext);

const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = expensesReducer();

  return (
    <expensesContext.Provider value={{ state, dispatch }}>
      {children}
    </expensesContext.Provider>
  );
};

export default TodoContextProvider;
