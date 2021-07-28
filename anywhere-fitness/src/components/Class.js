import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

export default function Class({details}){
return(
<div className='class-container'>
    <h3>{details.name}</h3>
    <p>Instructor: {details.instructor}</p>
    <p>Type of class: {details.type}</p>
    <p>Date and time: {details.date_time}</p>
    <p>Duration: {details.duration}</p>
    <p>Location: {details.location}</p>
    <p>Intensity: {details.intensity}</p>
    <p>Attendees: {details.attendees}</p>
    <p>Max class size: {details.max_size}</p>
    <div className="options">
    <button>Register</button>
    </div>
</div>


)



}