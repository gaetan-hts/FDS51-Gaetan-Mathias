/* eslint-disable react/prop-types */
import { useState } from "react";
import { useExpensesContext } from "../context/expensesContext";

const AddExpensesForm = ({ category }) => {
  const { dispatch } = useExpensesContext();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        title: title.trim(),
        amount: parseFloat(amount),
        category: selectedCategory,
      },
    });
    setTitle("");
    setAmount("");
    setSelectedCategory("");
  };

  return (
    <div className="add-expenses">
      <h2>Ajouter une dépense</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Titre :</label>
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Montant :</label>
          <input
            required
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div>
          <label>Catégorie :</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="">Choisir une catégorie</option>
            {category.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default AddExpensesForm;
