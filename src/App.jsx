import "./App.css";
import ExpensesList from "./components/ExpensesList";
import AddExpencesForm from "./components/AddExpensesForm";

function App() {
  const category = [
    "Alimentation",
    "Logement",
    "Transport",
    "Divertissement",
    "Santé",
    "Education",
    "Autres",
  ];
  return (
    <>
      <h1>Liste des dépenses</h1>
      <AddExpencesForm category={category} />
      <ExpensesList category={category} />
    </>
  );
}

export default App;
