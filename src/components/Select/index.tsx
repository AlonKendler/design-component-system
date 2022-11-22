import React, { useEffect, useState } from "react";

import { option } from "../SelectBase"
import SelectMulti from "../SelectMulti";
import SelectSingle from "../SelectSingle";



export interface SelectContainerProps {
  label: string;
  options: Array<option>;
  placeholder?: string;
  multi?: boolean;
}


const Select = (props: SelectContainerProps) => {



  return (
    <>

      {!props.multi ? <SelectSingle {...props} /> : <SelectMulti {...props} />}
    </>
  );
}

export default Select;
