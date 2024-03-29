import { useReducer } from "react";

const initialState = {
  expenses: [],
};

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };

    default:
      return state;
  }
};

const useExpensesReducer = () => useReducer(expensesReducer, initialState);

export default useExpensesReducer;
