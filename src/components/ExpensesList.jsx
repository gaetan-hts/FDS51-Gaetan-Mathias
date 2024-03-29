/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Expense from "./Expense";

const ExpensesList = ({ category }) => {
  const [filterSelectedCategory, setFilterSelectedCategory] = useState("");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  const expenses = [
    {
      title: "Train",
      amount: 30,
      category: "Transport",
    },
    {
      title: "Courses",
      amount: 120,
      category: "Alimentation",
    },
  ];

  console.log(filterSelectedCategory);

  useEffect(() => {
    if (filterSelectedCategory !== "") {
      const filteredExpenses = expenses.filter(
        (expense) => expense.category === filterSelectedCategory
      );
      setFilteredExpenses(filteredExpenses);
    } else {
      setFilteredExpenses(expenses);
    }
  }, [filterSelectedCategory]);

  return (
    <>
      .
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
    </>
  );
};

export default ExpensesList;
