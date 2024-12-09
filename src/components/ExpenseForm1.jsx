import { useRef, useState } from "react";

const ExpenseForm1 = ({ setExpenses }) => {
  const titleRef = useRef();
  const categoryRef = useRef();
  const amountRef = useRef();
  const emailRef = useRef();

  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter title" },
      { minLength: 5, message: "Title should be at least 5 characters long" },
    ],
    category: [{ required: true, message: "Please select a category" }],
    amount: [{ required: true, message: "Please enter an amount" }],
    email: [
      { required: true, message: "Please enter an email" },
      {
        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: "Please enter a valid email",
      },
    ],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key]?.some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expense = {
      title: titleRef.current.value,
      category: categoryRef.current.value,
      amount: amountRef.current.value,
      email: emailRef.current.value,
    };

    const validateResult = validate(expense);

    if (Object.keys(validateResult).length) return;

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);

    // Reset form inputs
    titleRef.current.value = "";
    categoryRef.current.value = "";
    amountRef.current.value = "";
    emailRef.current.value = "";
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" ref={titleRef} />
        <p className="error">{errors?.title}</p>
      </div>

      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select id="category" name="category" ref={categoryRef}>
          <option value="" hidden>
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="error">{errors?.category}</p>
      </div>

      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" ref={amountRef} />
        <p className="error">{errors?.amount}</p>
      </div>

      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" ref={emailRef} />
        <p className="error">{errors?.email}</p>
      </div>

      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm1;
