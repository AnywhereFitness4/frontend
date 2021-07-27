import React, { useState, useEffect } from 'react';
import schema from '../validation/SignupSchema';
import * as yup from 'yup';
import axios from 'axios'
import styled from 'styled-components'

const initialValues = {
    name:'',
    username:'',
    email:'',
    password: '',
    role:'',
    }
  
  const initialErrors = {
    name:'',
    username:'',
    email:'',
    password:'',
    role:'',
    }
  
  const initialUsers = []
  const isDisabled = true   

  
  const ContainerSignup = styled.div`
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  margin: 0 0 0 10rem;


  .form-container{
      display:flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      border:2px solid gray;
      border-radius:2%;
      padding:1rem;
    }

  `

  export default function SignUp() {

    const [values, setValues] = useState(initialValues)
    const [errors, setErrors] = useState(initialErrors)
    const [disabled, setDisabled] = useState(isDisabled)
    const [users, setUsers] = useState(initialUsers)

    const onChange = (event) => {
        const {name, value, type, checked} = event.target
        const valueToUse = type === 'checkbox' ? checked : value
        inputChange(name, valueToUse);
    }

    const inputChange = ( name, value ) => {
        yup
          .reach(schema, name)
          .validate(value)
          .then(() => {
            setErrors({
              ...errors,
              [ name ] : "",
            })
          })
          .catch(err => {
            setErrors({
              ...errors,
              [name] : err.errors[0],
            })
          })
        
          setValues({ ...values, [name]:value })
      }

      useEffect(() => {
        schema.isValid(values)
        .then(valid=> {
          setDisabled(!valid)
        })
        },[values])
    

    const addUser = (newUsers) => {
    axios
    .post('https://anywhere-fitness-4u.herokuapp.com/api/users/register', newUsers)
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
    alert('signup successful')
}
return (
<ContainerSignup>
    <h2>Sign Up</h2>
    <div className="errors">
        <div>{errors.username}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.name}</div>
        <div>{errors.role}</div>
    </div>
    <form className ='form-container' onSubmit={newUser}>

        
    <label>Name:
            <input
            type='name'
            value = {values.name}
            onChange={onChange}
            name='name'
            />
    </label>

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

        <label>Role
            <select name="role" id='role-dropdown' value={values.role} onChange={onChange}>
                    <option value="">-Select Role-</option>
                    <option value="client">client</option>
                    <option value="instructor">instructor</option>
            </select>
        </label>
        <button disabled={disabled}>Sign Up</button>
    </form>
</ContainerSignup>

)

  
}