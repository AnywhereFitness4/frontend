import * as yup from 'yup'


const classSchema = yup.object().shape({
class: yup
.string()
.trim()
.required('A class name is required')
.min(3, "Class name must be at least 3 characters"),
type: yup
.string()
.trim()
.required('A class type is required'),
start: yup
.string()
.required('A start time is required'),
duration:yup
.string()
.required('A class duration is required'),
intensity: yup
.string()
.oneOf(['low','med','high'],'An intensity level is required'),
location: yup
.string()
.required('A location is required'),
max_size: yup
.number()
.required('Max class size is required')
})

export default classSchema;