import { option } from "./components/SelectBase";
import SelectMulti from "./components/SelectMulti";
import SelectP from "./components/Select";
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit ", e);

    console.log("submit ", e.target);
    // console.log("submit ", e.target[1].value);
    // console.log("submit ", e.target[2].value);
    // console.log("submit ", e.target[3].value.filter((option: option) => option.isSelected).map((option: option) => option.label));
    // console.log("submit ", e.target.age.value);
    // console.log("submit ", e.target[4].value);



  }
  return (
    <>

      <form onSubmit={(e) => handleSubmit(e)}>
        <label>name<input type="text" /></label>
        <label>age<input type="text" name="age" /></label>
        <SelectP {...props} multi={false} />


        <button type="submit">Submit</button>
      </form>

    </>
  );
}

export default App;
