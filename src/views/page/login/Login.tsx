import LoginForm from "@/composites/loginForm/LoginForm";
import { Input } from "@mantine/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "store";
type Props = {};

const Login = (props: Props) => {
  const { isAuthentiacted, isLoading } = useSelector(
    (state:RootState) => state.auth
  );

  if (isLoading) return <p>Loading...</p>;

  if (isAuthentiacted) return <Navigate to="/my-wallet" />;

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
