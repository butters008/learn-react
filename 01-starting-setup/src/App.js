import { ExpenseItem } from "./comps/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        price={expenses[0].amount}
      />
      <ExpenseItem
        title={expenses[1].title}
        date={expenses[1].date}
        price={expenses[1].amount}
      />
      <ExpenseItem
        title={expenses[2].title}
        date={expenses[2].date}
        price={expenses[2].amount}
      />
      <ExpenseItem
        title={expenses[3].title}
        date={expenses[3].date}
        price={expenses[3].amount}
      />
    </div>
  );
}

export default App;
