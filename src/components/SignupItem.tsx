import React, { useState } from 'react';

const SignupItem = ({type, placeholder, handler, className, set, value}:any)=>
{

  const ref = React.createRef<HTMLInputElement>();
  const [valid, setValid] = useState(false);

  return (

    <div className={className} style={{width: "100%", minHeight: "6em"}}>

        <input  type={type} ref={ref} placeholder={placeholder} onChange={(e)=>{setValid(handler(e.target.value));
                                                                                set(e.target.value)
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
