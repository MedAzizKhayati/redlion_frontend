import { Formik } from 'formik';
import * as yup from 'yup'
import { CustomButton, CustomInput } from '../../shared/components';
import './styles.scss';
import { AiOutlineUser, AiOutlineMail, AiFillUnlock } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { register } from '../../services/auth.service';
import { useNavigate } from "react-router-dom";


const SingUpPage = () => {
    const navigate = useNavigate();

    const onSubmit = async (values) => {
        try {
            await register({
                email: values.email,
                password: values.password,
                name: values.firstName + ' ' + values.lastName
            });
            navigate('/login', { success: 'You have successfully registered!' });

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='signup-form'>
            {/* <img width="150px" height="k150px" style={{ borderRadius: '50%' }} src={image} id="Avatar" /> */}
            <h1>Sign Up</h1>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{
                    email: '',
                    password: '',
                    confirmPassword: '',
                    firstName: '',
                    lastName: ''
                }}
                onSubmit={onSubmit}
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
                        <div className='personal-details'>
                            <CustomInput
                                name="firstName"
                                placeholder="First Name"
                                onChange={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName}
                                error={errors.firstName}
                                Icon={AiOutlineUser}
                                width='45%'
                            />
                            <CustomInput
                                name="lastName"
                                placeholder="Last Name"
                                onChange={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName}
                                error={errors.lastName}
                                Icon={AiOutlineUser}
                                width='45%'
                            />
                        </div>
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

                        <CustomInput
                            name="confirmPassword"
                            placeholder="Confirm Your Password"
                            onChange={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            type='password'
                            error={errors.confirmPassword}
                            Icon={AiFillUnlock}
                        />

                        <div style={{ height: '20px' }} />
                        <CustomButton
                            onClick={handleSubmit}
                            title="Sign Up"
                            style={{ opacity: isValid ? 1 : 0.5 }}
                            disabled={!isValid}
                            type="Submit"
                        />
                        <div className='link'>
                            <Link to='/'>
                                <p>
                                    Log In
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
    firstName: yup
        .string()
        .min(3, ({ min }) => `First Name must be at least ${min} characters`)
        .required('First Name is Required'),
    lastName: yup
        .string()
        .min(3, ({ min }) => `Last Name must be at least ${min} characters`)
        .required('Last Name is Required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
});


export default SingUpPage;