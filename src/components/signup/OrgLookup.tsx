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
    // api
    //   .getOrganizationNames()
    //   .then((res) => {
    //     if (res.success) {
    //       setOrganizations(res.organizations)
    //     } else {
    //       alert(res.message);
    //     }
    //   })
    //   .catch((err) => {
    //     alert(err);
    //     setOrganizations([])
    //   });

    setOrganizations([
      'Lorem ipsum dolor sit',
      'amet, consectetur adipiscing elit.',
      'Mauris ut porta ipsum.',
      'Cras pulvinar, ex eu',
      'ornare sollicitudin, est justo',
      'facilisis nibh, eu commodo',
      'purus nulla quis nibh.',
      'Etiam dignissim gravida augue,',
      'vitae aliquam velit aliquam',
      'nec. Mauris ut felis',
      'ullamcorper, lacinia nibh at,',
      'pharetra mi. Phasellus interdum',
      'dapibus elit at condimentum.',
      'Aenean vulputate semper dolor',
      'ullamcorper fermentum. Nulla orci',
      'arcu, rutrum sit amet',
      'turpis id, varius volutpat',
      'quam. Vestibulum pulvinar dolor',
      'sit amet sem congue',
      'fringilla. Nunc quis sapien',
      'non sapien viverra eleifend',
      'sit amet sit amet',
      'mauris. Integer condimentum a',
      'justo quis tristique. Nullam',
      'imperdiet tempor turpis nec.',
    ]);
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
