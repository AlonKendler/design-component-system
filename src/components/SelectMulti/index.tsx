import React, { useEffect, useState } from "react";

import { option, SelectBase } from "../SelectBase"



export interface SelectContainerProps {
    label: string;
    options: Array<option>;
    placeholder?: string;

}


const SelectMulti = (props: SelectContainerProps) => {
    const [value, setValue] = useState<option[]>(props.options);

    const handleOnChange = (value: option[]) => {
        setValue(value);
        alert(value.filter(option => option.isSelected).map((option) => option.label))
    }


    return (
        <>
            {/* <button onClick={() => setValue(values => values.map(v => ({ ...v, isSelected: false })))}>clear all outer state</button> */}
            <SelectBase
                {...props}
                multi={true}
                value={value}
                onChange={handleOnChange}
            />
        </>
    );
}

export default SelectMulti;
