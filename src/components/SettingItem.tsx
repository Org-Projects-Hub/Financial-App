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

    <Card style={{ minHeight: "5em" }} >
      <Grid cols="3">
        <span className="bold text-md justify-start">{name}</span>
        {!edit ?
          <span className="bold text-md justify-start">{defaultValue}</span> :
          <input defaultValue={value} name="email" onChange={(e: any) => setValue(e.target.value)} />}
        {!edit ?
          <button className="justify-end btn" onClick={() => { setEdit(true) }}><i className={iconClass}>edit</i> </button>:
          <span className="justify-end">
            <button className="btn"> <i className={iconClass + " txt-green"} onClick={() => { setEdit(false) }}>clear</i></button>
            <button className="btn"><i className={iconClass + " txt-green"}
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
              }>done</i></button>
          </span>}
      </Grid>
    </Card>

  );
}

export default SettingItem;
