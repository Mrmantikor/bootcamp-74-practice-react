import * as Yup from 'yup';

export const validationRegisterSchema = Yup.object({
  name: Yup.string().min(2, 'Too short').max(10, 'Too long').required('This field is required'),
  email: Yup.string().email('email is not valid')
    .min(6, 'the email must contain min six letters')
    .required('email is required')
    .trim()
    .matches(
      /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
      'email is not valid'
    ),
  password: Yup
    .string()
    .required('password is required')
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),

  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Must match "password" field value'),
})

export const validationLoginSchema = Yup.object({
  email: Yup.string().email('email is not valid')
    .min(6, 'the email must contain min six letters')
    .required('email is required')
    .trim()
    .matches(
      /^[a-zA-Z0-9]+[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/,
      'email is not valid'
    ),
  password: Yup
    .string()
    .required('password is required')
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),

})