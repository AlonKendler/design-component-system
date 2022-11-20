import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Select from "./components/Select/Select";

const args = {
  id: 1,
  options: [
    { id: 0, label: "red", isSelected: false },
    { id: 1, label: "blue", isSelected: false },
    { id: 2, label: "purple", isSelected: false },
    { id: 3, label: "yellow", isSelected: false },
    { id: 4, label: "green", isSelected: false },
  ],
  label: "select component",
  loading: false,
};

function App() {
  const [value, setValue] = useState("select an option...");

  return (
    <div className="container">
      <Select
        value={value}
        onChange={(newValue) => {
          console.log("onchange: newvalue:", newValue);
          setValue(newValue);
        }}
        {...args}
      />
    </div>
  );
}

export default App;
