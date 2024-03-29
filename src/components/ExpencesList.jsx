/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Expence from "./Expence";

const ExpencesList = ({ category }) => {
  const [filterSelectedCategory, setFilterSelectedCategory] = useState("");
  const [filteredExpences, setFilteredExpences] = useState([]);

  const expences = [
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
      const filteredExpences = expences.filter(
        (expence) => expence.category === filterSelectedCategory
      );
      setFilteredExpences(filteredExpences);
    } else {
      setFilteredExpences(expences);
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
        {filteredExpences.map((expence, index) => (
          <Expence
            key={index}
            title={expence.title}
            category={expence.category}
            amount={expence.amount}
          />
        ))}
      </ul>
    </>
  );
};

export default ExpencesList;
