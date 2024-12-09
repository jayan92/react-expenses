import { useRef, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import expenseData from "../expenseData";
import ExpenseForm from "../components/ExpenseForm";
// import ExpenseForm from "./components/FormWithZod";
// import ExpenseForm from "./components/ExpenseForm1";
import ExpenseTable from "../components/ExpenseTable";

const Home = () => {
  const [expense, setExpense] = useState({
    title: "",
    amount: "",
    category: "",
    email: "test@gmail.com",
  });

  // const [expenses, setExpenses] = useState(expenseData);
  const [expenses, setExpenses] = useLocalStorage("expenses", expenseData);
  const [editingRowId, setEditingRowId] = useState("");

  const expenseTableRef = useRef();

  const updateMenuPositionFromParent = () => {
    if (expenseTableRef.current) {
      expenseTableRef.current.setMenuPosition({});
    }
  };

  return (
    <div onClick={() => updateMenuPositionFromParent()}>
      <h1 className="text-2xl mt-10 font-bold">Track Your Expense</h1>

      <div className="expense-tracker">
        <ExpenseForm
          expense={expense}
          setExpense={setExpense}
          setExpenses={setExpenses}
          editingRowId={editingRowId}
          setEditingRowId={setEditingRowId}
        />

        <ExpenseTable
          ref={expenseTableRef}
          expenses={expenses}
          setExpense={setExpense}
          setExpenses={setExpenses}
          setEditingRowId={setEditingRowId}
        />
      </div>
    </div>
  );
};

export default Home;
