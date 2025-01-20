import React from 'react';

const UserProfile = ({ firstName, lastName, age }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
};

export default UserProfile;
