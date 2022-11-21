import { useEffect, useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/darrow.svg"
import { ReactComponent as RemoveIcon } from "../../assets/x.svg"
import { ReactComponent as SelectAllIcon } from "../../assets/selectall.svg"
import { ReactComponent as AlertIcon } from "../../assets/alert.svg"
import styles from "./Select.module.css";
import { option } from "./SelectContainer";



export interface Selectprops {
  label: string;
  value: string;
  onChange: (value: any) => any;
  deleteOption: (value: any) => any;
  removeAll: (value: any) => any;
  selectAll: (value: any) => any;
  alert: (value: any) => any;
  options: Array<option>;
  placeholder?: string;
  multi?: boolean;
}

export const Select = ({
  label,
  value,
  onChange,
  deleteOption,
  removeAll,
  selectAll,
  alert,
  options,
  placeholder = "No value is selected",
  multi
}: Selectprops) => {

  const [showOptions, setShowOptions] = useState(false);
  //internal choosen options state, for multi tags
  const [choosenOptions, setChoosenOptions] = useState(options);

  useEffect(() => {
    let filteredOptions = options.filter((option) => option.isSelected === true)
    setChoosenOptions(filteredOptions)
  }, [options])

  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectLabel}>{label}</div>
      {multi ? (
        <>
          <div className={styles.selectBox} >
          <AlertIcon onClick={alert} className={styles.removeIcon} />
            <div className={styles.tagsContainer}>
              {choosenOptions.length == 0 && <span>{placeholder}</span>}
              {choosenOptions.map((option) => {
                return (
                  (
                    <div key={option.label} className={styles.tags}>
                      <div className={styles.tag}>{option.label}</div>
                      <RemoveIcon className={styles.removeIcon} onClick={() => { deleteOption(option); }} />
                    </div>
                  ))
              })}
            </div>
            <div className={styles.buttonsContainer}>
              {choosenOptions.length < options.length && <SelectAllIcon onClick={selectAll} className={styles.removeIcon} />}
              {choosenOptions.length > 0 && <RemoveIcon onClick={removeAll} className={styles.removeIcon} />}
              <DownArrow onClick={() => setShowOptions((prev) => !prev)} className={styles.downArrowIcon} />
            </div>
          </div>

          <div className={`${styles.optionsContainer} 
            ${showOptions ? styles.showOptions : styles.hideOptions}`}>
            {options && options.map((option) => {
              return (
                <div key={option.id}>
                  <label htmlFor={option.label} key={option.id}>
                    <input
                      type="checkbox"
                      id={option.label}
                      checked={option.isSelected}
                      onChange={(e) => { onChange(e); }}
                    />{option.label}
                  </label>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        // singleOption - for now separete
        <select
          className={styles.selectBox}
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
                  <option className={styles.optionsContainer} key={option.id}>{option.label}</option>
                </>
              );
            })}
        </select>
      )}
    </div>
  );
};

export default Select;
