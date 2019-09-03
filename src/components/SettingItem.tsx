import React, { useState, useContext } from 'react';
import { Card, Grid } from '../style/styled';
import api from '../api';

const SettingItem = (props: any) => {
  let { name, value: defaultValue, field, getUserInfo } = props;
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const iconClass = "material-icons pointer justify-end";
  return (

    <Card style={{ minHeight: "5em" }}>
      <Grid cols="3">
        <span className="bold text-md justify-start">{name}</span>
        {!edit ?
          <span className="bold text-md justify-start">{defaultValue}</span> :
          <input defaultValue={value} name="email" onChange={(e: any) => setValue(e.target.value)} />}
        {!edit ?
          <i className={iconClass} onClick={() => { setEdit(true) }}>edit</i> :
          <span>
            <i className={iconClass + " txt-green"} onClick={() => { setEdit(false) }}>clear</i>
            <i className={iconClass + " txt-green"}
              onClick={() => {
                api.updateInfo({ field, value })
                  .then((res) => {
                    //call rerender
                    if (res.success) getUserInfo();
                    else setValue(defaultValue) 
                    })
                  .catch((err) => {
                    alert(err);  
                    setValue(defaultValue);})
                  .finally(()=>{
                    setEdit(false);}
                  )
              }
              }>done</i>
          </span>}
      </Grid>
    </Card>
   
  );
}

export default SettingItem;
