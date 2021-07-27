import React, { useState } from 'react';
import schema from '../validation/SignupSchema';
import * as yup from 'yup';
import axios from 'axios'

const initialValues = {
    username:'',
    email:'',
    password: '',
    client: false,
    instructor: false,
    }
  
  const initialErrors = {
    username:'',
    email:'',
    password:'',
    }
  
  const initialUsers = []
  const isDisabled = true   
  const url = 'url'
  
  export default function SignUp() {

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(isDisabled)
    const [users, setUsers] = useState(initialUsers)

    const onChange = (event) => {
        const { name, value } = event.target;
        inputChange(name, value);
    }

    const inputChange = (name, value) => {

        yup.reach(schema, name)
            .validate(value)
            .then(() => {
                setErrors({ ...errors, [name]: '' })
            })
            .catch((err) => {
                setErrors({ ...errors, [name]: err.errors[0] })
            })

        setUsers({ ...users, [name]: value })
    }

    const addUser = (newUsers) => {
    axios
    .post(url, newUsers)
    .then(res => {
        setUsers([res.data, ...values])

    })
    .catch(err => {
      console.log({err})
    })
}
const newUser = (e) => {
    e.preventDefault();
    addUser(values)
}
return (
<div>
    <h2>Sign Up</h2>
    <div className="errors">
        <div>{errors.username}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
    </div>
    <form className ='form-container' onSubmit={newUser}>
        <label>Username:
            <input
            type='text'
            value = {values.username}
            onChange={onChange}
            name='username'
            />
        </label>
        <label>Email:
            <input
            type='email'
            value={values.email}
            onChange={onChange}
            name='email'
            />
        </label>
        <label>Password:
            <input
            type="password"
            value={values.password}
            onChange={onChange}
            name="password"
            />
        </label>
        <label>Instructor
            <input
            type='checkbox'
            checked={values.instructor}
            name='instructor'
            onChange={onChange}
            />
        </label>
        <label>Client
            <input
            type='checkbox'
            checked={values.client}
            name='client'
            onChange={onChange}
            />
        </label>
        <button>Sign Up</button>
    </form>
</div>

)

  
}