import { useState } from "react";
import "./Select.css";

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
  options: Array<option>;
  placeholder?: string;
  multi?: boolean;
}

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
  return (
    <>
      <div className="select-label">{label}</div>
      <select
        className="select-content"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          console.log("onCHnagign", e.target.value);
        }}
      >
        <option>{placeholder}</option>
        {options &&
          options.map((option) => {
            return (
              <>
                {multi ? (
                  <div className="checkbox">
                    <label htmlFor={option.label}></label>
                    <input
                      type="checkbox"
                      id={option.label}
                      checked={option.isSelected}
                    ></input>
                  </div>
                ) : (
                  <option key={option.id}>{option.label}</option>
                )}
              </>
            );
          })}
      </select>
    </>
  );
};

export default Select;
