import { useState } from 'react';

const Form = (props) => {

    const [selectedGenre, setSelectedGenre] = useState("placeholder");
// Handle the select input element change and set the value in state
const handleChange = (e) =>{
    // set the selected state
    setSelectedGenre(e.target.value);
    
}
    
    return (
        <>
 <form onSubmit={ (e) => { props.handleSubmit (e, selectedGenre) } }>
<label htmlFor="genres">Select the genre:</label>
<select onChange={ handleChange } value={ selectedGenre }>

<option value="placeholder" disabled>Genre</option>
  <option value="28">Action</option>
  <option value="12">Adventure</option>
  <option value="16">Animation</option>
  <option value="35">Comedy</option>
  <option value="80">Crime</option>
  <option value="99">Documentary</option>
  <option value="18">Drama</option>
  <option value="10751">Family</option>
  <option value="14">Fantasy</option>
  <option value="36">History</option>
  <option value="27">Horror</option>
  <option value="10402">Music</option>
  <option value="9648">Mystery</option>
  <option value="10749">Romance</option>
  <option value="878">Science Fiction</option>
  <option value="53">Thriller</option>
  <option value="10770">TV Movie</option>
  <option value="10752">War</option>
  <option value="37">Western</option>
</select>
<button>Submit!</button>
</form>
</>
    )
}

export default Form;