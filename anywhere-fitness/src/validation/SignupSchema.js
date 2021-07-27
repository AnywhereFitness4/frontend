import * as yup from "yup";


export default yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(8, "Name must be at least 8 characters long"),
    username: yup
        .string()
        .required("Username is required")
        .min(8, "Username must be at least 8 characters long"),
    password: yup
        .string()
        .required("Password is Required")
        .min(6, "Passwords must be at least 8 characters long."),
    email: yup
        .string()
        .required("Email is required"),
    role:yup.string().oneOf(['client', 'instructor']).required(),
});