import SelectMulti from "./components/SelectMulti";
import SelectSingle from "./components/SelectSingle";




const props = {

  label: "select component",
  placeholder: "select...",

  options: [
    { id: 0, label: "red", isSelected: false },
    { id: 1, label: "blue", isSelected: false },
    { id: 2, label: "purple", isSelected: true },
    { id: 3, label: "yellow", isSelected: false },
    { id: 5, label: "brown", isSelected: false },
    { id: 6, label: "lade", isSelected: false },
    { id: 7, label: "gold", isSelected: false },
  ]
};


function App() {

  return (
    <>
      <SelectSingle {...props} />
      <SelectMulti {...props} />
    </>
  );
}

export default App;
