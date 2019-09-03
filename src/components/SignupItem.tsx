import React, { useState, useEffect } from 'react';

const SignupItem = ({ type, placeholder, handler, className, set, value, setValid, valid, nextInput }: any) => {

  return (
<<<<<<< HEAD

    <div className={className} style={{width: "100%", minHeight: "6em"}}>
      
        <input  type={type} placeholder={placeholder} value={value} onChange={(e)=>{
                                                                                let temp = e.target.value.trim().toLowerCase();
                                                                                setValid(handler(temp));
                                                                                set(temp)
                                                                          }}
                                                                   onKeyDown ={ (e)=>{ if(e.keyCode === 13){
                                                                                nextInput();
                                                                   }}}
            />
=======
    <div className={className} style={{ width: "100%", minHeight: "6em" }}>

      <input type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          let temp = e.target.value.trim().toLowerCase();
          setValid(handler(temp));
          set(temp)
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            nextInput();
          }
        }}
      />
>>>>>>> c7e6d9c37659dcd3af0265b071acf2b593a19d10

      {!valid && value !== "" && <span className="txt-red">
        <i className="material-icons justify-end" >close</i>{`Invalid ${placeholder}`}
      </span>}

      {valid && <span className="txt-green">
        <i className="material-icons justify-end">done</i>{`${placeholder} is Valid`}
      </span>}
    </div>
  )
}

export default SignupItem;
