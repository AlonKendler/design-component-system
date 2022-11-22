import React, { useState } from "react";

import { option, Select } from "../Select"



export interface selectSingleProps {
    label: string;
    options: Array<option>;
    placeholder?: string;
    multi?: boolean;
}


const SelectSingle = (props: selectSingleProps) => {
    const [value, setValue] = useState("select an option...");



    const handleOnChange = (value: any) => {
        //if value is string, means its single select
        setValue(value);
        alert(value);
    }


    return (
        <Select
            {...props}
            multi={false}
            value={value}
            onChange={handleOnChange}

        />
    );
}

export default SelectSingle;
