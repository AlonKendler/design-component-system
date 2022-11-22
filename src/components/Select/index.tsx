import { useEffect, useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/darrow.svg"
import { ReactComponent as RemoveIcon } from "../../assets/x.svg"
import { ReactComponent as SelectAllIcon } from "../../assets/selectall.svg"
import styles from "./Select.module.css";

export type option = {
  id: number;
  label: string;
  isSelected: boolean;
};

export interface Selectprops {
  label: string;
  value: any;
  onChange: (value: any) => any;
  options: Array<option>;
  placeholder?: string;
  multi?: boolean;
}

export const Select = ({
  label,
  value,
  onChange,
  options,
  placeholder = "No value is selected",
  multi
}: Selectprops) => {

  const [showOptions, setShowOptions] = useState(false);
  const [multiselectOptions, setMultiSelectOptions] = useState<option[]>(value);
  const [filiteredOptions, setFilteredOptions] = useState(options);

  const removeAll = () => {
    setMultiSelectOptions(previousState => previousState.map(option => ({ ...option, isSelected: false })))

  }
  const selectAll = () => {
    setMultiSelectOptions(previousState => previousState.map(option => ({ ...option, isSelected: true })))
  }

  const deleteOption = (option: option) => {
    let newState = [...multiselectOptions];
    const indexOfId = multiselectOptions.findIndex((opt) => opt.id === option.id);
    newState[indexOfId].isSelected = false;
    setMultiSelectOptions(newState)
  }

  const handleOnMultiChange = (value: any) => {

    // if value is object, multi select
    const { checked, id } = value.target;
    const indexOfId = multiselectOptions.findIndex((opt) => opt.label === id);
    let newState = [...multiselectOptions];
    newState[indexOfId].isSelected = checked;
    setMultiSelectOptions(() => (newState));

  }

  useEffect(() => {

    if (multi) {
      let filteredOptions = multiselectOptions.filter((option) => option.isSelected)
      setFilteredOptions(filteredOptions);
      onChange(multiselectOptions)

    }
  }, [multiselectOptions])

  useEffect(() => {

    if (multi) {

      console.log("value", value.filter((option: option) => option.isSelected).length)
      console.log("multiselectOptions", multiselectOptions.filter(option => option.isSelected).length)
      if (
        value.filter((option: option) => option.isSelected).length !==
        multiselectOptions.filter(option => option.isSelected).length) {
        console.log("selected multiple")
        setMultiSelectOptions(() => value)
      }
    }
  }, [value])



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
              {filiteredOptions.length == 0 && <span>{placeholder}</span>}
              {filiteredOptions.map((option) => {
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
              {filiteredOptions.length < options.length && <SelectAllIcon role="button" tabIndex={0} onClick={selectAll} className={styles.removeIcon} />}
              {filiteredOptions.length > 0 && <RemoveIcon role="button" tabIndex={0} onClick={removeAll} className={styles.removeIcon} />}
              <DownArrow tabIndex={0} role="button" onClick={handleArrowOnClick} onKeyPress={(e) => e.key === 'Enter' && handleArrowOnClick()} className={styles.downArrowIcon} />
            </div>
          </div>

          <div className={`${styles.optionsContainer} 
            ${showOptions ? styles.showOptions : styles.hideOptions}`}>
            {multiselectOptions && multiselectOptions.map((option) => {
              return (
                <div role="option" key={option.id} tabIndex={0}>
                  <label htmlFor={option.label} key={option.id}>
                    <input
                      type="checkbox"
                      id={option.label}
                      checked={option.isSelected}
                      onChange={(e) => { handleOnMultiChange(e); }}
                      onKeyPress={(e) => e.key === 'Enter' && handleOnMultiChange(e)}

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
          onChange={e => onChange(e.target.value)}
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
      )
      }
    </div >
  );
};

export default Select;
