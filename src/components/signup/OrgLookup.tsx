import React, { SetStateAction, useEffect, useState } from 'react';
import api from '../../api';

type props = {
  signUpUser: () => void;
  setSelectedOrganization: any;
};

/**
 * Third part of the submit form. Called by SignupForm.tsx
 * Makes the user select an option from a list of organizations retrieved from the backend
 * @param signUpUser Function to aggregate all entered data and initiate an API call
 * @param setSelectedOrganization Update state of SignupForm.tsx
 */
const OrgLookup = ({ signUpUser, setSelectedOrganization }: props) => {
  /**
   * List of avialable organizations
   */
  const [organizations, setOrganizations] = useState([]);
  /**
   * Form disabled or active flag.
   * set to "false" when an organization is selected
   */
  const [disableSubmit, setdisableSubmit] = useState<boolean>(true);

  useEffect(() => {
    // API call
    api
      .getOrganizationNames()
      .then(
        (res: {
          success: boolean;
          message: string;
          organizations: Array<{ _id: string; name: string; __v: number }>;
        }) => {
          if (res.success) {
            let temp: any = [];

            for (var i = 0; i < res.organizations.length; i++) {
              temp.push(res.organizations[i].name);
            }

            setOrganizations([...temp]);
          } else {
            alert(res.message);
          }
        }
      )
      .catch((err) => {
        alert(err);
        setOrganizations([]);
      });
  }, []);

  /**
   * Function to create dropdown options from organizations array
   */
  const getOptions = () => {
    return organizations.map((org) => {
      return <option>{org}</option>;
    });
  };

  return (
    <>
      <form className="auth-form ">
        <div className="desc-title blue-text-dark">
          Choose your school/organization
        </div>
        <select
          name=""
          id=""
          onChange={(e) => {
            setdisableSubmit(false); // Make the submit button active
            setSelectedOrganization(e.target.value); // Update the selected organization
          }}
          style={{ display: 'block', marginTop: '1em', marginBottom: '1em' }}
        >
          <option hidden disabled selected>
            -- select an option --
          </option>
          {getOptions()}
        </select>
        <button
          className="yellow-button"
          disabled={disableSubmit}
          onClick={(e) => {
            e.preventDefault();
            signUpUser(); // API call
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default OrgLookup;
