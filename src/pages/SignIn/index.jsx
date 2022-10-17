import React from 'react'
import '../SignIn/SignIn.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import Helmet from '../../components/Helmet/Helmet'

const SignIn = () => {
  const formik = useFormik({
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Required')
        .min(4, 'Must be 4 characters or more '),
      password: Yup.string()
        .required('required')
        .matches(
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
          'Password must be more 8 character and contain at least one lowercase letter, one number and one uppercase letter'
        ),
    }),
    onSubmit: (values) => {
      window.alert('Login success')
    },
  })

  return (
    <Helmet title="Login">
      <div className="SignIn">
        <div className="SignIn__name">Sign in</div>
        <div className="SignIn__Form">
          <form className="infoform">
            <label>Email address</label>
            <input
              className="input__SignIn"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            {formik.errors.email && (
              <p className="errorMsg">{formik.errors.email}</p>
            )}
            <label>Password</label>
            <input
              className="input__SignIn"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            {formik.errors.password && (
              <p className="errorMsg">{formik.errors.password}</p>
            )}
            <div className="btn-singin">
              <button className="btn__SignIn" type="submit">
                Đăng nhập
              </button>
            </div>
            <hr width="70%" size="5px" align="center" color="gray"></hr>
            <div className="back__SignUp">
              <button className="btnBack__SignUp">
                <Link to="/SignUp">Đăng ký ngay</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Helmet>
  )
}

export default SignIn
