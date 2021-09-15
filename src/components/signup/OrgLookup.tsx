import React, {
  FormEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from 'react';
import api from 'api';

type props = {
  signUpUser: () => void;
  setSelectedOrganization: any;
  selectedOrganization: String;
};

/**
 * Third part of the submit form. Called by SignupForm.tsx
 * Makes the user select an option from a list of organizations retrieved from the backend
 * @param signUpUser Function to aggregate all entered data and initiate an API call
 * @param setSelectedOrganization Update state of SignupForm.tsx
 */
const OrgLookup = ({
  signUpUser,
  setSelectedOrganization,
  selectedOrganization,
}: props) => {
  /**
   * List of avialable organizations
   */
  const [organizations, setOrganizations] = useState([]);
  /**
   * Form disabled or active flag.
   * set to "false" when an organization is selected
   */
  const [disableSubmit, setdisableSubmit] = useState<boolean>(true);

  const orgInputRef = useRef<HTMLInputElement>();
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
          let temp: any = [];

          for (var i = 0; i < res.organizations.length; i++) {
            temp.push(res.organizations[i].name);
          }

          setOrganizations([...temp]);
        }
      )
      .catch((err) => {
        alert(err.message);
        setOrganizations([]);
      });
  }, []);

  /**
   * Function to create dropdown options from organizations array
   */
  const getOptions = () => {
    // let organizations = ['a', 'baaa', 'aac'];
    return organizations.map((org, i) => {
      return <option key={i}>{org}</option>;
    });
  };

  return (
    <>
      <form className="auth-form ">
        <div className="desc-title blue-text-dark">
          Choose your school/organization
        </div>

        <input
          ref={orgInputRef}
          list="organizations"
          onInput={(e) => {
            let val = (e.target as any).value;
            if (val != '') {
              setdisableSubmit(false); // Make the submit button active
              setSelectedOrganization(val); // Update the selected organization
            } else {
              setdisableSubmit(true);
            }
          }}
        />
        <datalist id="organizations">{getOptions()}</datalist>

        <button
          className="yellow-button"
          disabled={disableSubmit}
          onClick={(e) => {
            e.preventDefault();
            if (organizations.includes(selectedOrganization)) signUpUser();
            // API call
            else
              alert(
                'Invalid Organization name! \nPlease select an organization from the dropdown list.'
              );
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default OrgLookup;
