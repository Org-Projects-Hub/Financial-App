import React, { useState } from 'react';
import { Card, Grid } from '../style/styled';


const SettingItem = ({name, value}:any)=>
{
  const [edit, setEdit] = useState(false);
  return (
    <Card style={{minHeight : "5em"}}>
    <Grid cols="3">
      <span className="bold text-md justify-start">{name}</span>
       {!edit?
         <span className="bold text-md justify-start">{value}</span> :
         <input defaultValue={value}  name="email" onChange={()=>console.log("S")}/>}
       {!edit?
       <i  className="material-icons pointer justify-end" onClick={()=>{setEdit(true)}}>edit</i> :
       <i className="material-icons pointer txt-green justify-end" onClick={()=>{setEdit(false)}}>done</i>}
    </Grid>
    </Card>
  );
}

export default SettingItem;
