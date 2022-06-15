import { Formik } from 'formik';
import * as yup from 'yup'
import { CustomButton, CustomInput } from '../../shared/components';
import image from '../../shared/assets/images/logo.png';
import { AiOutlineMail, AiFillUnlock } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import { Checkbox } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { login } from '../../services/auth.service';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalProvider';
import './styles.scss';
import { toast } from 'react-toastify';



const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { authState, authDispatch } = useContext(GlobalContext);
    const [disabled, setDisabled] = useState(false);

    const handleSubmit = async (values, toastify = true) => {
        const id = toast.loading('Logging in...');
        try {
            setDisabled(true);
            const user = await login(values);

            toast.dismiss(id);
            toast.success('You have successfully logged in!');

            authDispatch({ type: 'LOGIN', payload: user });

            if (location.state?.from)
                return navigate(location.state.from);

            navigate('/');
        } catch (error) {
            console.log(error);
            const message = error.response?.data?.message || 'Something went wrong!';
            toast.dismiss(id);
            toast.error(message);
        }

        setDisabled(false);
    }

    useEffect(() => {
        if (authState.isAuthenticated)
            navigate('/');
    }, [authState]);

    return (
        <div className='login-form'>
            {/* <img width="150px" height="150px" style={{ borderRadius: '50%' }} src={image} id="Avatar" /> */}
            <h1>Log In</h1>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
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
                            style={{
                                opacity: isValid && !disabled ? 1 : 0.5,
                                cursor: isValid && !disabled ? 'pointer' : 'default'
                            }}
                            disabled={!isValid || disabled}
                            type='submit'
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
        .min(4, ({ min }) => `Password must be at least ${min} characters`)
        .required('Password is required'),
});

export default LoginPage;