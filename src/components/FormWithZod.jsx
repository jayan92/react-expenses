import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const expenseSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "Please enter a title" })
    .min(5, { message: "Title should be at least 5 characters long" }),
  category: z.string().nonempty({ message: "Please select a category" }),
  amount: z
    .number({ invalid_type_error: "Please enter a valid amount" })
    .min(1, { message: "Amount must be greater than 0" }),
  email: z
    .string()
    .nonempty({ message: "Please enter an email" })
    .email({ message: "Please enter a valid email" }),
});

const ExpenseForm = ({ setExpenses }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(expenseSchema), // Integrate zod schema with react-hook-form
    defaultValues: {
      title: "",
      category: "",
      amount: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    setExpenses((prevState) => [
      ...prevState,
      { ...data, id: crypto.randomUUID() },
    ]);
    reset(); // Reset form after successful submission
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ textDecoration: "underline" }}>
          Form With Zod validation
        </h3>

        {/* Title Field */}
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input id="title" {...register("title")} />
          <p className="error">{errors?.title?.message}</p>
        </div>

        {/* Category Field */}
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select id="category" {...register("category")}>
            <option value="" hidden>
              Select Category
            </option>
            <option value="Grocery">Grocery</option>
            <option value="Clothes">Clothes</option>
            <option value="Bills">Bills</option>
            <option value="Education">Education</option>
            <option value="Medicine">Medicine</option>
          </select>
          <p className="error">{errors?.category?.message}</p>
        </div>

        {/* Amount Field */}
        <div className="input-container">
          <label htmlFor="amount">Amount</label>
          <input
            id="amount"
            type="number"
            {...register("amount", { valueAsNumber: true })}
          />
          <p className="error">{errors?.amount?.message}</p>
        </div>

        {/* Email Field */}
        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input id="email" {...register("email")} />
          <p className="error">{errors?.email?.message}</p>
        </div>

        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
