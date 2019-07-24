import React, { useState } from 'react';

const SignupItem = ({type, placeholder, handler, className}:any)=>
{
  const ref = React.createRef<HTMLInputElement>();
  const [edit, setEdit] = useState(false);
  return (
    <div className={className} style={{width: "100%"}}>

        <input  type={type} ref={ref} placeholder={placeholder} onChange={handler}
            />

    </div>

  )
}

export default SignupItem;
