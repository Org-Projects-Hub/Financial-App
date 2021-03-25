import React from 'react';
import { useParams } from 'react-router-dom';

const ClassDetails = () => {
  let { classId } = useParams<{ classId: string }>();

  return (
    <>
      <h1>{classId}</h1>
    </>
  );
};

export default ClassDetails;
