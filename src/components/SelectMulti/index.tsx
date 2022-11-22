import React, { useEffect, useState } from "react";

import { option, Select } from "../Select"



export interface SelectContainerProps {
    label: string;
    options: Array<option>;
    placeholder?: string;
    multi?: boolean;
}


const SelectMulti = (props: SelectContainerProps) => {
    const [value, setValue] = useState<option[]>(props.options);

    const handleOnChange = (value: option[]) => {
        setValue(value);
        alert(value.filter(option => option.isSelected).map((option) => option.label))
    }


    return (
        <>
            <button onClick={() => setValue(values => values.map(v => ({ ...v, isSelected: false })))}>clear all outer state</button>
            <Select
                {...props}
                multi={true}
                value={value}
                onChange={handleOnChange}
            />
        </>
    );
}

export default SelectMulti;
