import ExpenseList from "./components/ExpenseList";

function App() {
  const expenses = [
    { date: new Date(2021, 8, 14), title: "Laptop", amount: 789.25 },
    { date: new Date(2021, 9, 12), title: "Tissur", amount: 4.32 },
    { date: new Date(2021, 8, 17), title: "Glass", amount: 10.65 }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
