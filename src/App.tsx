import React, { useState } from "react";

import "./App.css";
import Select from "./components/Select/Select";

const args = {
  id: 1,
  options: [
    { id: 0, label: "red", isSelected: false },
    { id: 1, label: "blue", isSelected: false },
    { id: 2, label: "purple", isSelected: true },
    { id: 3, label: "yellow", isSelected: false },
    { id: 5, label: "brown", isSelected: false },
    { id: 6, label: "lade", isSelected: false },
    { id: 7, label: "gold", isSelected: false },
  ],
  label: "select component",
  loading: false,
};

function App() {
  const [value, setValue] = useState("select an option...");
  const [optionState, setOptionsState] = useState(args.options);

  

  return (
    <div className="container">
      <Select
        value={value}
        multi
        removeAll={()=>{
          console.log("deleting all options...")
          let newState = optionState;
          newState.forEach((option)=>option.isSelected=false)
          setOptionsState(newState)
        }}
        deleteOption={(value)=>{
          console.log("delete item:", value.target)
        }}
        onChange={(newValue) => {
          if (typeof newValue === "string") {
            //if value is string, means its single select
            setValue(newValue);
          } else {
            // if value is object, multi select
            const { checked, id } = newValue.target;
            console.log("multiselecting...", checked, id);
            const indexOfId = optionState.findIndex((opt) => opt.label === id);

            let newl = optionState;
            newl[indexOfId].isSelected = checked;
            setOptionsState(()=>(newl));
            console.log("newState:", newl, indexOfId);
          }
        }}
        {...args}
        options={optionState}
      />
    </div>
  );
}

export default App;
