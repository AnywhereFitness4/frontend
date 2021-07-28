import React, {useState,useEffect} from 'react'
import axios from 'axios'
import schema from '../validation/classFormSchema'
import * as yup from 'yup'
const iniValues = {
    name: '',
    type: '',
    start: '',
    duration: '',
    //Dropdown
    intensity: '',
    location: '',
    attendees:'',
    max_size: '',
}

const iniErrors = {
    name: '',
    type: '',
    start: '',
    //Dropdown
    intensity: '',
    location: '',
    attendees:'',
    size: '',
}

const iniClasses = []
const iniDisabled = true
const url = 'https://anywhere-fitness-4u.herokuapp.com/api/'
export default function ClassForm(){

const [classes,setClasses] = useState(iniClasses)
const [formValues,setFormValues] = useState(iniValues)
const [formErrors,setFormErrors] = useState(iniErrors)
const [disabled, setDisabled] = useState(iniDisabled)

const getClasses = () => {
    axios.get(`${url}classes`)
    .then(res => {
        setClasses(res.data)
        console.log(res.data)
    })
    .catch(err => {
        console.log(err)
    })
}

const postNewClass = newClass => {
axios.post(`${url}classes`,newClass)
.then(res => {
    setClasses([res.data,...classes])
    console.log(classes)
})
.catch(err => {
    console.log(err)
})
.finally(() => {
    setFormValues(iniValues)
})
}

const validate = (name, value) => {
    yup.reach(schema,name)
    .validate(value)
    .then(() => setFormErrors ({...formErrors, [name]: ''}))
    .catch(err => setFormErrors ({...formErrors, [name]: err.errors[0]}))
}
const change = (name,value) => {
    validate(name,value)
    setFormValues({...formValues,
    [name]: value
    })
}

const onSubmit = evt => {
    evt.preventDefault()
    postNewClass(formValues)
}
const onChange = evt => {
    const {name, value} = evt.target
    change(name,value)
}

useEffect(()=> {
    getClasses()
},[])
useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
},[formValues])

return (
<form className='classForm-container' onSubmit ={onSubmit}>
    <div className ='form-group submit'>
       
        <div className ='errors'>
        <div>{formErrors.name}</div>
        <div>{formErrors.type}</div>
        <div>{formErrors.start}</div>
        <div>{formErrors.intensity}</div>
        <div>{formErrors.location}</div>
        <div>{formErrors.attendees}</div>
        <div>{formErrors.size}</div>
        </div>
        <label>Class name: 
            <input
                value={classes.name}
                onChange={onChange}
                name ='class'
                type ='text'           
            />
        </label>
        <label>Class type:
        <input
        value={classes.type}
        onChange={onChange}
        name='type'
        type='text'
        />
        </label>
        <label>Start time:
        <input
        value={classes.start}
        onChange={onChange}
        name='start'
        type='time'
        step='1'
        />
        </label>
        <label>Duration
            <input
            value={classes.duration}
            onChange ={onChange}
            name = 'duration'

            />
        </label>
        <label>Intensity:
        <select
        onChange={onChange}
        value={classes.intensity}
        name='intensity'       
        >
        <option value =''>Choose an intensity level</option>
        <option value ='low'>Low intensity</option>
        <option value ='med'>Medium intensity</option>
        <option value ='high'>High intensity</option>
        </select>
        </label>
    
    <label>Location:  
    <input
    value={classes.location}
    onChange={onChange}
    type ='text'
    name='location'
    />
    </label>

    <label>Max size: 
    <input
    value={classes.max_size}
    onChange={onChange}
    type='text'
    name='size'
    />
    </label>
    <button disabled={disabled}>Create Class</button>
    </div>
</form>



)

}