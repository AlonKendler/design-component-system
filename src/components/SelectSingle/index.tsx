import React, { useState } from "react";

import { option, SelectBase } from "../SelectBase"



export interface selectSingleProps {
    label: string;
    options: Array<option>;
    placeholder?: string;

}


const SelectSingle = (props: selectSingleProps) => {
    const [value, setValue] = useState("select an option...");



    const handleOnChange = (value: any) => {
        //if value is string, means its single select
        setValue(value);
        alert(value);
    }


    return (
        <SelectBase
            {...props}
            multi={false}
            value={value}
            onChange={handleOnChange}

        />
    );
}

export default SelectSingle;
