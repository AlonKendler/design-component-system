import React, { useState } from "react";

import { option, Select } from "../Select"



export interface SelectContainerProps {

    label: string;
    optionsList: Array<option>;
    placeholder?: string;
    multi?: boolean;
}


const SelectContainer = ({ optionsList, label, placeholder, multi }: SelectContainerProps) => {
    const [value, setValue] = useState("select an option...");
    const [options, setOptions] = useState(optionsList);

    const handleRemoveAll = () => {
        console.log("deleting all options...")
        let newState = [...options];
        newState.forEach((option) => option.isSelected = false)
        setOptions(newState)
    }
    const handleSelectAll = () => {
        console.log("selecting all options...")
        let newState = [...options];
        newState.forEach((option) => option.isSelected = true)
        setOptions(newState)
    }

    const handleDeleteOption = (option: option) => {
        let modifiedOptions = [...options];
        const indexOfId = options.findIndex((opt) => opt.id === option.id);
        modifiedOptions[indexOfId].isSelected = false;
        setOptions(modifiedOptions)
        console.log("delete item:", modifiedOptions)
    }

    //refactor this

    const handleOnChange = (value: any) => {
        if (typeof value === "string") {
            //if value is string, means its single select
            setValue(value);
        } else {
            // if value is object, multi select
            const { checked, id } = value.target;
            const indexOfId = options.findIndex((opt) => opt.label === id);
            let modifiedOptions = [...options];
            modifiedOptions[indexOfId].isSelected = checked;
            setOptions(() => (modifiedOptions));
            console.log("onchange multi:", modifiedOptions, indexOfId);

            alert(getSelectedOptions());
        }
    }
    const getSelectedOptions = () => {
        let selectedOptions = options.filter((option) => option.isSelected === true);
        return selectedOptions.map((option) => option.label)

    }

    return (
        <Select
            label={label}
            placeholder={placeholder}
            value={value}
            multi={multi}
            removeAll={handleRemoveAll}
            selectAll={handleSelectAll}
            deleteOption={handleDeleteOption}
            onChange={handleOnChange}
            options={options}
        />
    );
}

export default SelectContainer;
