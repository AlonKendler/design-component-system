

import SelectContainer from "./components/SelectContainer";

const args = {

  label: "select component",
  placeholder: "select...",
  multi: true 
};

const options = [
  { id: 0, label: "red", isSelected: false },
  { id: 1, label: "blue", isSelected: false },
  { id: 2, label: "purple", isSelected: true },
  { id: 3, label: "yellow", isSelected: false },
  { id: 5, label: "brown", isSelected: false },
  { id: 6, label: "lade", isSelected: false },
  { id: 7, label: "gold", isSelected: false },
]

function App() {

  return (
    <>
      <SelectContainer optionsList={options} {...args} />
    </>
  );
}

export default App;
