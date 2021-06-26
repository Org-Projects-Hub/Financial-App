import React, { useState, useContext, useMemo, useCallback } from 'react';
import { Card, Grid } from '../../style/styled';
import api from '../../api';

import { editButton, buttonX, checkButton } from 'assets';
import { parse } from 'url';

const SettingItem = (props: any): JSX.Element => {
  let {
    name,
    value: defaultValue,
    field,
    getUserInfo,
    updatable,
    userEmail,
  } = props;
  const [edit, setEdit] = useState(false);
  const [value, setValue] = useState(!defaultValue ? '' : defaultValue);
  const [loading, setLoading] = useState(false);
  const iconClass = 'material-icons pointer justify-end';

  const numberToPhoneNo = (number = value) => {
    if (!number) return null;

    let parsedNo: string = '';

    for (let i = 0; i < number.length; i++) {
      parsedNo += number[i];

      if (i == 2 || i == 5) parsedNo += '-';
    }

    if (parsedNo.charAt(parsedNo.length - 1) == '-')
      parsedNo = parsedNo.substring(0, parsedNo.length - 1);
    return parsedNo;
  };

  const phoneNoToNumber = (phoneNo: string): string => {
    console.log(phoneNo);
    phoneNo = phoneNo.replaceAll('-', '');
    console.log(phoneNo);

    if (isNaN(Number(phoneNo))) return '';

    return phoneNo;
  };

  const updateInfo = () => {
    api
      .updateInfo({ field, value, email: userEmail })
      .then((res) => {
        if (res.success) getUserInfo();
        else setValue(defaultValue);
      })
      .catch((err) => {
        alert(err);
        setValue(defaultValue);
      })
      .finally(() => setEdit(false));
  };

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
            <span className="bold text-md justify-start">
              {field == 'phone' ? numberToPhoneNo(defaultValue) : defaultValue}
            </span>
          ) : (
            <input
              value={field == 'phone' ? numberToPhoneNo() : value}
              name="email"
              onChange={(e: any) => {
                let { value } = e.target;

                if (field == 'phone') value = phoneNoToNumber(e.target.value);

                if (value.length <= 10) setValue(value);
              }}
            />
          )}

          {updatable ? (
            <>
              {!edit ? (
                <img
                  src={editButton}
                  style={{ height: '1.75em', cursor: 'pointer' }}
                  onClick={() => setEdit(true)}
                />
              ) : (
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

                  <img
                    src={checkButton}
                    style={{
                      height: '1.75em',
                      cursor:
                        field == 'phone'
                          ? value.length !== 10
                            ? 'not-allowed'
                            : 'pointer'
                          : 'pointer',
                    }}
                    onClick={(event) => {
                      event.preventDefault();

                      if (field !== 'phone' || value.length == 10) updateInfo();
                      // else if () updateInfo();
                    }}
                  />
                </span>
              )}{' '}
            </>
          ) : null}
        </Grid>
      </div>
      <hr />
    </>
  );
};

export default SettingItem;
