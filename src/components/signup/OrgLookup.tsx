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
  selectedOrganization: string;
};

const OrgConfirmation = ({
  signUpUser,
  setAskConfirmation,
  selectedOrganization,
}: {
  signUpUser: any;
  setAskConfirmation: any;
  selectedOrganization: string;
}): JSX.Element => {
  const [checked, setChecked] = useState([false, false]);
  const [organization, setOrganization] = useState(null);

  useEffect(() => {
    api
      .getOrganizationDetails(selectedOrganization)
      .then((res) => setOrganization(res))
      .catch((err) => alert(err.message));
  }, []);

  if (!organization) return null;
  return (
    <div className="auth-form">
      <div
        className="desc-title blue-text-dark"
        style={{ marginBottom: '0.25em' }}
      >
        Please confirm your organization
      </div>

      <div>
        Address:{' '}
        {`${organization.address}, ${organization.city}, ${organization.state}, ${organization.zip}`}
      </div>
      <div>Name: {organization.name}</div>

      <div
        style={{ display: 'flex', marginBottom: '0.25em', marginTop: '0.35em' }}
      >
        <input
          type="checkbox"
          id="check1"
          name="check1"
          checked={checked[0]}
          style={{ alignSelf: 'center', marginRight: '0.5em' }}
          onChange={() => setChecked([!checked[0], checked[1]])}
        />
        <label htmlFor="check1">Yes, This is my organization.</label>
      </div>
      <div style={{ display: 'flex' }}>
        <input
          type="checkbox"
          id="check2"
          name="check2"
          checked={checked[1]}
          style={{ alignSelf: 'center', marginRight: '0.5em' }}
          onChange={() => setChecked([checked[0], !checked[1]])}
        />
        <label htmlFor="check2">
          I understand that I won't be able to change my organization
          afterwards.
        </label>
      </div>
      <br />

      <div style={{ display: 'flex' }}>
        <button
          className="blue-button"
          onClick={() => setAskConfirmation(false)}
        >
          Back
        </button>

        <div style={{ flexGrow: 1 }}></div>
        <button
          className="yellow-button"
          disabled={checked[0] && checked[1] ? false : true}
          onClick={() => signUpUser()}
        >
          Submit
        </button>
      </div>
    </div>
  );
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
  const [askConfirmation, setAskConfirmation] = useState<boolean>(false);

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

  if (askConfirmation)
    return (
      <OrgConfirmation
        signUpUser={signUpUser}
        setAskConfirmation={setAskConfirmation}
        selectedOrganization={selectedOrganization}
      />
    );
  else
    return (
      <>
        <form className="auth-form ">
          <div className="desc-title blue-text-dark">
            Choose your school/organization
          </div>

          <input
            ref={orgInputRef}
            list="organizations"
            value={selectedOrganization}
            onInput={(e) => {
              let val = (e.target as any).value;

              setdisableSubmit(val != '' ? false : true); // Make the submit button active

              setSelectedOrganization(val); // Update the selected organization
            }}
          />
          <datalist id="organizations">{getOptions()}</datalist>

          <button
            className="yellow-button"
            disabled={disableSubmit}
            onClick={(e) => {
              e.preventDefault();
              if (organizations.includes(selectedOrganization))
                setAskConfirmation(true);
              // API call
              else {
                alert(
                  'Invalid Organization name! \nPlease select an organization from the dropdown list.'
                );
                setSelectedOrganization('');
              }
            }}
          >
            Next
          </button>
        </form>
      </>
    );
};

export default OrgLookup;
