import { useEffect, useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/darrow.svg"
import { ReactComponent as RemoveIcon } from "../../assets/x.svg"
import { ReactComponent as SelectAllIcon } from "../../assets/selectall.svg"
import { ReactComponent as AlertIcon } from "../../assets/alert.svg"
import styles from "./Select.module.css";

export type option = {
  id: number;
  label: string;
  isSelected: boolean;
};

export interface Selectprops {
  label: string;
  value: string;
  onChange: (value: any) => any;
  deleteOption: (value: any) => any;
  removeAll: (value: any) => any;
  selectAll: (value: any) => any;
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
  // Check if div is nessesary
  // Make responsive
  // Accessibility
  // search
  //
  const handleArrowOnClick = () => setShowOptions((prev) => !prev);

  return (
    <div className={styles.selectContainer}>
      <div className={styles.selectLabel} id="select-label">{label}</div>
      {multi ? (
        <>
          <div className={styles.selectBox} aria-labelledby="select-label">
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
              {choosenOptions.length < options.length && <SelectAllIcon role="button" tabIndex={0} onClick={selectAll} className={styles.removeIcon} />}
              {choosenOptions.length > 0 && <RemoveIcon role="button" tabIndex={0} onClick={removeAll} className={styles.removeIcon} />}
              <DownArrow tabIndex={0} role="button" onClick={handleArrowOnClick} onKeyPress={(e) => e.key === 'Enter' && handleArrowOnClick()} className={styles.downArrowIcon} />
            </div>
          </div>

          <div className={`${styles.optionsContainer} 
            ${showOptions ? styles.showOptions : styles.hideOptions}`}>
            {options && options.map((option) => {
              return (
                <div role="option" key={option.id} tabIndex={0}>
                  <label htmlFor={option.label} key={option.id}>
                    <input
                      type="checkbox"
                      id={option.label}
                      checked={option.isSelected}
                      onChange={(e) => { onChange(e); }}
                      onKeyPress={(e) => e.key === 'Enter' && onChange(e)}

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
          aria-labelledby="select-label"
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
