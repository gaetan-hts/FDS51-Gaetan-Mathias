/* eslint-disable react/prop-types */
const Expense = ({ title, category, amount }) => {
  return (
    <>
      <li className="item">
        <p>{title}</p>
        <p>{category}</p>
        <p>{amount.toFixed(2)} €</p>
      </li>
      <div className="separator"></div>
    </>
  );
};

export default Expense;
