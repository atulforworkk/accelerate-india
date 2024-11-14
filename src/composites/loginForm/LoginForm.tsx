import { Button, Input } from "@mantine/core";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { initialValues,validationSchema } from "./constants";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { login } from "@/actions/login";
type Props = {};

const LoginForm = (props: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>()



  const formik = useFormik({
   initialValues,
    validationSchema: Yup.object({
      username: Yup.string().email("Invalid email address").required("Email is required "),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password should be valid  "),
    }),
    onSubmit: (values) => {
      // Handle form submission
      dispatch(login({
        username: 'emilys',
        password: 'emilyspass',
      }))
    },
  });
  const {values}= formik;
  console.log("🚀 ~ LoginForm ~ values:", values)
  return (
    <div className="phone:flex phone:flex-col phone:justify-center phone:h-screen laptop:flex laptop:items-center laptop:justify-center laptop:h-screen">
      <h1 className="phone:text-2xl phone:font-semibold phone:text-center laptop:font-semibold">
        Login
      </h1>
      <form
        onSubmit={formik.handleSubmit}
        className="phone:flex phone:flex-col laptop:w-3/12  laptop:flex laptop:justify-center  "
      >
        <Input
          placeholder="Email"
          className="phone:mx-4 phone:my-2"
          name="username" 
          type="email"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && formik.errors.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <div className="text-red-500 text-sm phone:mx-4">
            {formik.errors.username}
          </div>
        ) : null}

        <Input
          placeholder="Password"
          className="phone:mx-4 phone:my-2"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm phone:mx-4">
            {formik.errors.password}
          </div>
        ) : null}

        <Button
          type="submit"
          className="phone:m-4 bg-main-color rounded-full hover:bg-custom-Purple"
         
        >
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
