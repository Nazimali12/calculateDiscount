import React from 'react';

const StatusMessage = ({ status }) => {
  let message;
  if (status === "success") {
    message = "✔ Success! Operation completed.";
  } else if (status === "error") {
    message = "❌ Error! Something went wrong.";
  } else if (status === "loading") {
    message = "⏳ Loading... Please wait.";
  } else {
    message = "ℹ No status available.";
  }

  return <p>{message}</p>;
};

export default StatusMessage;
