import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../SignUp/SignUp.css'
import { Link } from 'react-router-dom'
import Helmet from '../../components/Helmet/Helmet'

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      confirmedPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required')
        .min(4, 'Must be 4 characters or more '),
      email: Yup.string()
        .required('Required')
        .matches(
          /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          'Please enter a valid email address'
        ),
      password: Yup.string()
        .required('required')
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          'Password must be more 8 character and contain at least one lowercase letter, one number and one uppercase letter'
        ),
      confirmedPassword: Yup.string()
        .required('Required')
        .oneOf([Yup.ref('password'), null], 'Password must match'),
      phone: Yup.string()
        .required('Required')
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          'Must be as valid phone number'
        ),
    }),
    onSubmit: (values) => {
      window.alert('Form submitted')
      const accout = [values]
      console.log(accout)
    },
  })

  return (
    <Helmet title="Register">
      <div className="SignUp">
        <div className="SignUp__name">Sign up</div>
        <div className="SignUp__Form">
          <form className="infoform" onSubmit={formik.handleSubmit}>
            <label>Your name</label>
            <input
              className="input__SignUp"
              type="text"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder="Enter your name"
            />
            {formik.errors.name && (
              <p className="errorMsg">{formik.errors.name}</p>
            )}
            <label>Email address</label>
            <input
              className="input__SignUp"
              type="email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter your email"
            />
            {formik.errors.email && (
              <p className="errorMsg">{formik.errors.email}</p>
            )}
            <label>Password</label>
            <input
              className="input__SignUp"
              type="password"
              id="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter your password"
            />
            {formik.errors.password && (
              <p className="errorMsg">{formik.errors.password}</p>
            )}
            <label>Confirm Password</label>
            <input
              className="input__SignUp"
              type="password"
              id="confirmedPassword"
              name="confirmedPassword"
              value={formik.values.confirmedPassword}
              onChange={formik.handleChange}
              placeholder="Confirm your password"
            />
            {formik.errors.confirmedPassword && (
              <p className="errorMsg">{formik.errors.confirmedPassword}</p>
            )}
            <label>Phone number</label>
            <input
              className="input__SignUp"
              type="text"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              placeholder="Enter your phone number"
            />
            {formik.errors.phone && (
              <p className="errorMsg">{formik.errors.phone}</p>
            )}
            <div className="btn-singup">
              <button className="btn__SignUp" type="submit">
                Đăng ký
              </button>
            </div>
            <hr width="70%" size="5px" align="center" color="gray"></hr>
            <div className="back__SignIn">
              <button className="btnBack__SignIn">
                <Link to="/SignIn">Đăng nhập ngay</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Helmet>
  )
}

export default SignUp
