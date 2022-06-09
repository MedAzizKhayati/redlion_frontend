import { Formik } from 'formik';
import * as yup from 'yup'
import { CustomButton, CustomInput } from '../../shared/components';
import './styles.scss';
import { AiOutlineMail, AiFillUnlock } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className='auth-form'>
            <h1>Log In</h1>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={() => navigate('/form')}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                }) => (
                    <>
                        <CustomInput
                            name="email"
                            placeholder="Email Address"
                            onChange={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                            Icon={AiOutlineMail}
                        />
                        <CustomInput
                            name="password"
                            placeholder="Password"
                            onChange={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            type='password'
                            error={errors.password}
                            Icon={AiFillUnlock}
                        />
                        <div className='tools'>
                            <div className='remember-me'>
                                <Checkbox size='small' defaultChecked />
                                <div>
                                    Remember me
                                </div>
                            </div>
                            <div className='forgot-password'>
                                Forgot password?
                            </div>
                        </div>
                        <div style={{ height: '20px' }} />
                        <CustomButton
                            onClick={handleSubmit}
                            title="Log In"
                            style={{ opacity: isValid ? 1 : 0.5 }}
                            disabled={!isValid}
                        />
                        <div className='link'>
                            <Link to='/register'>
                                <p className='forgot-password'>
                                    Create Account
                                </p>
                            </Link>
                        </div>

                        <div style={{ height: '15px' }} />
                    </>
                )}
            </Formik>
        </div>
    )
}

const loginValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email("Please enter valid email")
        .required('Email Address is Required'),
    password: yup
        .string()
        .min(8, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
});

export default LoginPage;