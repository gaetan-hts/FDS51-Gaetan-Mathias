/* eslint-disable react/prop-types */
const Expence = ({ title, category, amount }) => {
  return (
    <li>
      <p>{title}</p>
      <p>{category}</p>
      <p>{amount}</p>
    </li>
  );
};

export default Expence;
