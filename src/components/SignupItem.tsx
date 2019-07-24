import React, { useState } from 'react';

const SignupItem = ({type, placeholder, handler, className}:any)=>
{

  const ref = React.createRef<HTMLInputElement>();
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div className={className} style={{width: "100%"}}>

        <input  type={type} ref={ref} placeholder={placeholder} onChange={(e)=>{setValid(handler(e.target.value));
                                                                                setValue(e.target.value)
                                                                          }}
            />

        {!valid && value !== "" && <i  className="material-icons justify-end txt-red" >close</i>}
          {valid  &&   <i className="material-icons justify-end txt-green">done</i>}
    </div>

  )
}

export default SignupItem;
