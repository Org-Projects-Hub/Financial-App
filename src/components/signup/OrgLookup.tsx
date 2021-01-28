import React, { useEffect, useState } from 'react';

const OrgLookup = ({
  signUpUser,
  setSelectedOrganization,
}: {
  signUpUser: () => void;
  setSelectedOrganization: any;
}) => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    // API call
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
          onChange={(e) => setSelectedOrganization(e.target.value)}
          style={{ display: 'block', marginTop: '1em', marginBottom: '1em' }}
        >
          {getOptions()}
        </select>
        <button
          className="yellow-button"
          onClick={(e) => {
            e.preventDefault();
            signUpUser();
          }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default OrgLookup;
