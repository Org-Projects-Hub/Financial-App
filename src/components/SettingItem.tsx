import React, { useState, useContext } from 'react';
import { Card, Grid } from '../style/styled';
import api from '../api';

import editButton from '../assets/icons/button-edit.svg';
import buttonX from '../assets/icons/button-x.svg';
import checkButton from '../assets/icons/button-check.svg';

const SettingItem = (props: any): JSX.Element => {
  let { name, value: defaultValue, field, getUserInfo } = props;
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [loading, setLoading] = useState(false);
  const iconClass = 'material-icons pointer justify-end';
  return (
    <>
      <div style={{ minHeight: '4em', display: 'grid' }}>
        <Grid
          cols="3"
          style={{ gridTemplateColumns: '1fr 3fr .55fr', gridGap: '2em' }}
        >
          <span
            className="bold text-md justify-start"
            style={{ fontWeight: 'bold' }}
          >
            {name}
          </span>
          {!edit ? (
            <span className="bold text-md justify-start">{defaultValue}</span>
          ) : (
            <input
              defaultValue={value}
              name="email"
              onChange={(e: any) => setValue(e.target.value)}
            />
          )}

          {!edit ? (
            <img
              src={editButton}
              style={{ height: '1.75em', cursor: 'pointer' }}
              onClick={() => setEdit(true)}
            />
          ) : (
            // <button className="justify-end btn" onClick={() => setEdit(true)}>
            //   <i className={iconClass}>edit</i>{' '}
            // </button>
            <span className="justify-end">
              <img
                src={buttonX}
                style={{
                  height: '1.75em',
                  cursor: 'pointer',
                  marginRight: '.5em',
                }}
                onClick={() => setEdit(false)}
              />
              {/* {' '}
                <i
                  className={iconClass + ' txt-green'}
                  onClick={() => {
                    setEdit(false);
                  }}
                >
                  clear
                </i> */}
              <img
                src={checkButton}
                style={{ height: '1.75em', cursor: 'pointer' }}
                onClick={() => {
                  api
                    .updateInfo({ field, value })
                    .then((res) => {
                      //call rerender
                      if (res.success) getUserInfo();
                      else setValue(defaultValue);
                    })
                    .catch((err) => {
                      alert(err);
                      setValue(defaultValue);
                    })
                    .finally(() => setEdit(false));
                }}
              />
              {/* <button className="btn">
                <i
                  className={iconClass + ' txt-green'}
                  onClick={() => {
                    api
                      .updateInfo({ field, value })
                      .then((res) => {
                        //call rerender
                        if (res.success) getUserInfo();
                        else setValue(defaultValue);
                      })
                      .catch((err) => {
                        alert(err);
                        setValue(defaultValue);
                      })
                      .finally(() => setEdit(false));
                  }}
                >
                  done
                </i>
              </button> */}
            </span>
          )}
        </Grid>
      </div>
      <hr />
    </>
  );
};

export default SettingItem;
