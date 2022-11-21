import { useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/darrow.svg"
import { ReactComponent as RemoveIcon } from "../../assets/x.svg"
import styles from "./Select.module.css";


type option = {
  id: number;
  label: string;
  isSelected: boolean;
};


export interface Selectprops {
  id: number;
  label: string;
  loading: boolean;
  value: string;
  onChange: (value: any) => any;
  deleteOption: (value: any) => any;
 removeAll: (value: any) => any;
  options: Array<option>;
  placeholder?: string;
  multi?: boolean;
}


export const Select = ({
  id,
  label,
  value,
  onChange,
  deleteOption,
  removeAll,
  options,
  loading,
  placeholder = "No value is selected",
  multi,
  ...props
}: Selectprops) => {
  const [showOptions, setShowOptions] = useState(false);

  const showCheckboxes = () => {
    console.log("showOptions triggered:", showOptions)
    if (showOptions) {
      setShowOptions(false);
    } else {
      setShowOptions(true);
    }
  };
  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectLabel}>{label}</div>
      {multi ? (
        <div className={styles.multipleSelection}>
          <div className={styles.selectBox} >
            <div className={styles.tagsContainer}>
              {options.map((option) => {
                return (option.isSelected &&
                  (
                    <div key={option.label}className={styles.tags}>
                      <div  className={styles.tag}>{option.label}</div>
                      <RemoveIcon className={styles.removeIcon} onClick={(e) => deleteOption(e)}>X</RemoveIcon>
                    </div>
                  ))
              })}
            </div>            
            <RemoveIcon onClick={removeAll} className={styles.removeIcon}/>
            <DownArrow onClick={()=>setShowOptions((prev)=>!prev)} className={styles.downArrowIcon}/>
   
          </div>

          <div
            id="checkboxes"
            className={`
              ${styles.checkBoxes} ${showOptions ? styles.showOptions : styles.hideOptions
              }
             
            `}
          >
            {options &&
              options.map((option) => {
                return (
                  <div key={option.id}>
                    <label
                      htmlFor={option.label}
                      key={option.id}
                      onChange={(e) => {
                        onChange(e);
                        setShowOptions(false);
                      }}
                    >
                      <input
                        type="checkbox"
                        id={option.label}
                        defaultChecked={option.isSelected}
                      />
                      {option.label}
                    </label>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        // singleOption - for now separete
        <select
          className="select-content"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            console.log("onCHnagign", e.target.value);
          }}
        >
          <option key="00">{placeholder}</option>
          {options &&
            options.map((option) => {
              return (
                <>
                  <option key={option.id}>{option.label}</option>
                </>
              );
            })}
        </select>
      )}
    </div>
  );
};

export default Select;
