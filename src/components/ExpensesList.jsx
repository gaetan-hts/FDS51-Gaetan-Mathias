/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Expense from "./Expense";
import { useExpensesContext } from "../context/expensesContext";

const ExpensesList = ({ category }) => {
  const {
    state: { expenses },
  } = useExpensesContext();
  const [filterSelectedCategory, setFilterSelectedCategory] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    if (filterSelectedCategory !== "") {
      const filteredExpenses = expenses.filter(
        (expense) => expense.category === filterSelectedCategory
      );
      setFilteredExpenses(filteredExpenses);
    } else {
      setFilteredExpenses(expenses);
    }
  }, [filterSelectedCategory, expenses]);

  useEffect(() => {
    const totalAmount = filteredExpenses.reduce(
      (acc, expense) => acc + parseFloat(expense.amount),
      0
    );
    setTotal(totalAmount.toFixed(2));
  }, [total, filterSelectedCategory, expenses]);

  return (
    <>
      <div className="expenses-list-container">
        <header>
          <h3>Titre</h3>
          <h3>Category</h3>
          <h3>Montant</h3>
          <select
            value={filterSelectedCategory}
            onChange={(e) => setFilterSelectedCategory(e.target.value)}
          >
            <option value="">Tout</option>
            {category.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </header>
        <ul>
          {filteredExpenses.map((expense, index) => (
            <Expense
              key={index}
              title={expense.title}
              category={expense.category}
              amount={expense.amount}
            />
          ))}
        </ul>
      </div>
      <div className="total-container">
        <h2>
          Total des dépenses (
          {filterSelectedCategory
            ? filterSelectedCategory
            : "Toutes catégories"}
          ) : {total} €
        </h2>
      </div>
    </>
  );
};

export default ExpensesList;
