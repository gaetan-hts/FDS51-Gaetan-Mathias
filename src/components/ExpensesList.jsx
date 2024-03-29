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
  const [total, setTotal] = useState(0);

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
  }, [total, filterSelectedCategory, filteredExpenses]);

  return (
    <>
      <div className="select-container">
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
      </div>
      <div className="expenses-list-container">
        <header>
          <div className="title-container">
            <h3>Titre</h3>
            <h3>Categorie</h3>
            <h3>Montant</h3>
          </div>
        </header>
        <ul className="item-list">
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
          Total (
          {filterSelectedCategory
            ? filterSelectedCategory
            : "Toutes catégories"}
          ) :
        </h2>
        <p className="total">{total} €</p>
      </div>
    </>
  );
};

export default ExpensesList;
