/* eslint-disable react/prop-types */
const Expense = ({ title, category, amount }) => {
  return (
    <li>
      <p>{title}</p>
      <p>{category}</p>
      <p>{amount.toFixed(2)} €</p>
    </li>
  );
};

export default Expense;
