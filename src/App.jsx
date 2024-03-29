import "./App.css";
import ExpencesList from "./components/ExpencesList";
import AddExpencesForm from "./components/AddExpencesForm";

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
      <ExpencesList category={category} />
    </>
  );
}

export default App;
