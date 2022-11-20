import { useState } from "react";
import styles from "./Select.module.css";

type option = {
  id: number;
  label: string;
  isSelected: boolean;
};

interface SelectedItemsProps {
  options: Array<option>;
}
export interface Selectprops {
  id: number;
  label: string;
  loading: boolean;
  value: string;
  onChange: (value: any) => any;
  options: Array<option>;
  placeholder?: string;
  multi?: boolean;
}

const SelectedItems = ({ options = [] }: SelectedItemsProps) => {
  return (
    <div className="tags">{!options && "select"}
      {options.map((option) => {
        return (
          option.isSelected === true ?
            <label className="tag">{option.label}</label> : null)
      })}
    </div>
  )

};
export const Select = ({
  id,
  label,
  value,
  onChange,
  options,
  loading,
  placeholder = "No value is selected",
  multi,
  ...props
}: Selectprops) => {
  const [showOptions, setShowOptions] = useState(false);

  const showCheckboxes = () => {
    if (showOptions) {
      setShowOptions(false);
    } else {
      setShowOptions(true);
    }
  };
  return (
    <div className="select-container">
      <div className="select-label">{label}</div>
      {multi ? (
        <div className={styles.multipleSelection}>
          <div className={styles.selectBox} onClick={showCheckboxes}>
            <div className={styles.tags}>
              {options.map((option) => {
                return (option.isSelected && <div key={option.label} className={styles.tag}>{option.label}</div>)
              })}

            </div>

            <div className="">{showOptions ? "open" : "close"}</div>
          </div>

          <div
            id="checkboxes"
            className={`
              ${styles.checkBoxes} ${
              showOptions ? styles.showOptions : styles.hideOptions
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
