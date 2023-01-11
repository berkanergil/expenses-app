import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.02,
      date: new Date(2022, 1, 2),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 924.02,
      date: new Date(2022, 1, 2),
    },
    {
      id: "e3",
      title: "New Desk",
      amount: 94.02,
      date: new Date(2022, 1, 2),
    },
  ];
  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
    </div>
  );
}

export default App;
