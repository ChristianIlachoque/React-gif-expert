import { useState } from "react";

export const AddCategory = ({ addCategory }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input.trim().length <= 1) return
    addCategory(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInput} value={input} />
      <button type="sumbit">ADD</button>
    </form>
  );
};
