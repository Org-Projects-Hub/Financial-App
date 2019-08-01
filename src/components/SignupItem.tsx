import React, { useState } from 'react';

const SignupItem = ({type, placeholder, handler, className, set, value}:any)=>
{

  const [valid, setValid] = useState(value);

  return (

    <div className={className} style={{width: "100%", minHeight: "6em"}}>

        <input  type={type} placeholder={placeholder} value={value} onChange={(e)=>{setValid(handler(e.target.value.trim()));
                                                                                set(e.target.value.trim())
                                                                          }}
            />

        {!valid && value !== "" && <span className="txt-red">
                                      <i className="material-icons justify-end" >close</i>{`Invalid ${placeholder}`}
                                    </span>}

          {valid  && <span className="txt-green">
                        <i className="material-icons justify-end">done</i>{`${placeholder} is Valid`}
                      </span>}
    </div>

  )
}

export default SignupItem;
