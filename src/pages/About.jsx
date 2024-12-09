import { useState } from "react";

const About = () => {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <h1 className="text-xl my-7">Code Splitting and Lazy Loading</h1>
      <button
        onClick={() => {
          import("../data").then((module) => setTodoList(module.todos));
        }}
      >
        Load Data
      </button>

      <ul className="my-4">
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default About;
