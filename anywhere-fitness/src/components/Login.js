import React, { useState } from 'react';
import schema from '../validation/SignupSchema';
import * as yup from 'yup';
import axios from 'axios'

const initialValues = {
    username:'',
    password: '',
}
  
  const initialErrors = {
    username:'',
    password:'',
    }
  

  const url = 'url'
  
  export default function Login() {

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(initialErrors)



//     const addUser = (newUsers) => {
//     axios
//     .post(url, newUsers)
//     .then(res => {
//         setUsers([res.data, ...values])

//     })
//     .catch(err => {
//       console.log({err})
//     })
// }
const newUser = (e) => {
    e.preventDefault();
    // addUser(values)
}
return (
<div>
    <h2>Login</h2>
    <div className="errors">
        <div>{errors.username}</div>
        <div>{errors.password}</div>
    </div>
    <form className ='form-container' onSubmit={newUser}>
        <label>Username:
            <input
            type='text'
            value = {values.username}
            name='username'
            />
        </label>
        <label>Password:
            <input
            type="password"
            value={values.password}
            name="password"
            />
        </label>
        <button>Login</button>
    </form>
</div>

)

  
}