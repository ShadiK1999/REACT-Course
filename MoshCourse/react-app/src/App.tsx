import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbbb", amount: 20, category: "Food" },
    { id: 3, description: "cccc", amount: 30, category: "Transportation" },
    //... more expenses...
  ]);

  return (
    <ExpenseList
      expenses={expenses}
      onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
    />
  );
}

export default App;
