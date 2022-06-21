import { Formik } from 'formik';
import * as yup from 'yup'
import { CustomButton, CustomInput } from '../../shared/components';
import './styles.scss';
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalProvider';
import { updateProfile } from '../../services/profile.service';
import { toast } from 'react-toastify';


const ProfilePage = () => {
    const navigate = useNavigate();
    const {
        authState: {
            user
        },
        authDispatch
    } = useContext(GlobalContext);
    const [disabled, setDisabled] = useState(false);

    const onSubmit = async (values) => {
        toast.dismiss();
        const id = toast.loading('Loading...');
        try {
            setDisabled(true);
            const updatedUser = await updateProfile(user.id, {
                name: values.firstName + ' ' + values.lastName
            });
            authDispatch({ type: 'SET_USER', payload: updatedUser });
            toast.success('Profile updated successfully!');
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message[0] || 'Something went wrong!');
        }
        setDisabled(false);
        toast.dismiss(id);
    }

    const getFirstName = (name) => {
        name = name.split(' ');
        name.pop();
        return name.join(' ');
    }

    const getLastName = (name) => {
        return name.split(' ').pop();
    }

    return (
        <div className='signup-form'>
            {/* <img width="150px" height="k150px" style={{ borderRadius: '50%' }} src={image} /> */}
            <h1>Profile</h1>
            <Formik
                validationSchema={loginValidationSchema}
                initialValues={{
                    email: user.email,
                    firstName: getFirstName(user.name),
                    lastName: getLastName(user.name),
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
                        <CustomInput
                            name="firstName"
                            placeholder="First Name"
                            onChange={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={values.firstName}
                            error={errors.firstName}
                            Icon={AiOutlineUser}
                        />
                        <CustomInput
                            name="lastName"
                            placeholder="Last Name"
                            onChange={handleChange('lastName')}
                            onBlur={handleBlur('lastName')}
                            value={values.lastName}
                            error={errors.lastName}
                            Icon={AiOutlineUser}
                        />
                        <CustomInput
                            name="email"
                            placeholder="Email Address"
                            onChange={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                            Icon={AiOutlineMail}
                        />
                        <div style={{ height: '20px' }} />
                        <CustomButton
                            onClick={handleSubmit}
                            title="Save Changes"
                            style={{
                                opacity: isValid && !disabled ? 1 : 0.5,
                                cursor: isValid && !disabled ? 'pointer' : 'default'
                            }}
                            type="Submit"
                            disabled={!isValid || disabled}
                        />
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
    firstName: yup
        .string()
        .min(3, ({ min }) => `First Name must be at least ${min} characters`)
        .required('First Name is Required'),
    lastName: yup
        .string()
        .min(3, ({ min }) => `Last Name must be at least ${min} characters`)
        .required('Last Name is Required'),
});


export default ProfilePage;