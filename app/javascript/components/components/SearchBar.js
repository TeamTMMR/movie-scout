import React ,{useState} from 'react'

const SearchBar = ({submitFn}) => {
    const [title, setTitle] = useState('')
    const handleSubmit = () => {
        submitFn(title)
    } 
    const handleChange = (e) => {
        setTitle(e.target.value)
    }
  
    return (
    <div>
      <section className="search-wrap">
          <input type="text"
          className='search-bar'
          placeholder='Search'
          onChange={handleChange} />
          <button className='search-btn' onClick={handleSubmit}>Search</button>
        </section>
    </div>
  )
}

export default SearchBar
