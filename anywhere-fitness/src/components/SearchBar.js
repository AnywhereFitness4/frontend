import React from 'react'


const SearchBar = ({searchQuery,setSearchQuery}) => {

return(
<form action="/" method="get">
<label htmlFor='class-search'>
<span>Search Class Name</span>
</label>
<input
type='text'
value={searchQuery}
onInput={e => setSearchQuery(e.target.value)}
id='class-search'
placeholder='Class'
name='s'
/>
</form>

)

}
export default SearchBar
