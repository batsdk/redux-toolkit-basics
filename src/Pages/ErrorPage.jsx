import React from "react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();

    const redirectHome = () => {
        navigate("/")
    }

  return (
    <div>
      <h1>Page You are looking for is not availble</h1>
      <button onClick={redirectHome} >
        Redirect Home
      </button>
    </div>
  );
};

export default ErrorPage;
