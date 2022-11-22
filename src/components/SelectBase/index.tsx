import { useEffect, useState } from "react";
import { ReactComponent as DownArrow } from "../../assets/darrow.svg"
import { ReactComponent as RemoveIcon } from "../../assets/x.svg"
import { ReactComponent as SelectAllIcon } from "../../assets/selectall.svg"
import styles from "./SelectBase.module.css";

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

export const SelectBase = ({
  label,
  value,
  onChange,
  options,
  placeholder = "No value is selected",
  multi
}: Selectprops) => {

  const [showOptions, setShowOptions] = useState(false);
  const [multiselectOptions, setMultiSelectOptions] = useState<option[]>(value);
  const [filiteredOptions, setFilteredOptions] = useState<option[]>(options);
  const [searchableOptions, setSearchableOptions] = useState<option[]>([]);
  const [userInput, setUserInput] = useState("");

  const handleSearchInput = (e: any) => { setUserInput(e.target.value); };
  useEffect(() => { handleSearch(); }, [userInput]) //run this on every change>?

  const handleSearch = () => {
    if (userInput !== "") {
      let newList = multiselectOptions.filter(option => {
        const lowerCase = option.label.toLocaleLowerCase();
        const filter = userInput.toLocaleLowerCase();
        return lowerCase.includes(filter)
      })
      setSearchableOptions(newList)
    }
    else {
      setSearchableOptions([])
    }
  }

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

  const updateOption = (option: option) => {
    let newState = [...multiselectOptions];
    const indexOfId = multiselectOptions.findIndex((opt) => opt.id === option.id);
    newState[indexOfId].isSelected = !option.isSelected;
    setMultiSelectOptions(newState)
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
      console.log("value", value.filter((option: option) => option.isSelected))
      console.log("multiselectOptions", multiselectOptions.filter(option => option.isSelected).length)
      if (
        value.filter((option: option) => option.isSelected).length !==
        multiselectOptions.filter(option => option.isSelected).length) {
        setMultiSelectOptions(() => value)
        setSearchableOptions(() => value)
      }
    }
  }, [value])

  // Check if div is nessesary
  // Make responsive
  // Accessibility V
  // search V
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
                    <div key={option.id} className={styles.tags}>
                      <div className={styles.tag}>{option.label}</div>
                      <RemoveIcon className={styles.removeIcon} role="button" tabIndex={0} onClick={() => { deleteOption(option); }} onKeyPress={(e) => e.key === 'Enter' && deleteOption(option)} />
                    </div>
                  ))
              })}
            </div>
            <div className={styles.buttonsContainer}>
              <hr style={{ margin: "2px", opacity: "50%" }} />
              {filiteredOptions.length < options.length && <SelectAllIcon role="button" tabIndex={0} onClick={selectAll} onKeyPress={(e) => e.key === 'Enter' && selectAll()} className={styles.removeIcon} />}
              {filiteredOptions.length > 0 && <RemoveIcon role="button" tabIndex={0} onClick={removeAll} onKeyPress={(e) => e.key === 'Enter' && removeAll()} className={styles.removeIcon} />}
              <hr style={{ margin: "2px", opacity: "50%" }} />
              <div onKeyPress={(e) => e.key === 'Enter' && handleSearch()} className={styles.searchIcon}>
                <label htmlFor="" onKeyPress={(e) => e.key === 'Enter' && handleSearch()} className={styles.searchIcon}>
                  <input placeholder="Search..." value={userInput} onChange={handleSearchInput} />
                </label>
              </div>
              <DownArrow role="button" tabIndex={0} onClick={handleArrowOnClick} onKeyPress={(e) => e.key === 'Enter' && handleArrowOnClick()} className={styles.downArrowIcon} />
            </div>
          </div>
          {/*there are two optionsContainer: the search results and one showing all options. render only one conditonaliy */}
          <div className={`${styles.optionsContainer} ${searchableOptions.length ? styles.showOptions : styles.hideOptions}`}>
            {searchableOptions.map((option) => {
              return (
                <div role="option" key={option.id} tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && updateOption(option)} >
                  <label htmlFor={option.label} key={option.id}>
                    <input
                      type="checkbox"
                      id={option.label}
                      checked={option.isSelected}
                      onChange={() => updateOption(option)}
                    />{option.label}
                  </label>
                </div>
              );
            })

            }

          </div>

          <div className={`${styles.optionsContainer} ${showOptions && !searchableOptions.length ? styles.showOptions : styles.hideOptions}`}>
            {multiselectOptions && !searchableOptions.length && multiselectOptions.map((option) => {
              return (
                <div role="option" key={option.id} tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && updateOption(option)} >
                  <label htmlFor={option.label} key={option.id}>
                    <input
                      type="checkbox"
                      id={option.label}
                      checked={option.isSelected}
                      onChange={() => updateOption(option)}
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

export default SelectBase;
