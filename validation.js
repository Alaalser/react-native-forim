import { string, object } from 'yup';

export const validationSchema = object().shape({
  email: string()
    .email('Please enter a valid email')
    .required('Please enter an email'),
  password: string()
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required('Please enter a password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
});
