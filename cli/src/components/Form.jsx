import React, {useState} from 'react'
import '../styles/Form.scss'
const Form = () => {
    const [name, setName] = useState("How did you hear about us?");

    const handleChange = (e) => {
        setName(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
      };
  return (
    <div>
        <form className='form2'>
            <input type='text' className='form2__input' placeholder='Full Name'/>
            <input type='text' className='form2__input' placeholder='Email'/>
            <input type='text' className='form2__input' placeholder='Phone Number'/>
            <input type='text' className='form2__input' placeholder='Your City, Country'/>
            <div className='form2__dropdown'>
                {/* add drop-down menu */}
                <select defaultValue={name} onChange={handleChange} className='form2__select'>
                    <option value='How did you hear about us?' disabled hidden>How did you hear about us?</option>
                    <option value='word'>Word of mouth</option>
                    <option value='insta'>Instagram</option>
                    <option value='tiktok'>Tiktok</option>
                    <option value='facebook'>Facebook</option>
                    <option value='twitter'>Twitter</option>
                    <option value='marketing'>Marketing ad </option>
                </select>

            </div>
            <textarea className='form2__textarea' placeholder='How can we help you?'/>
            <button className='form2__button' onClick={handleSubmit}>Submit</button>
        </form>

    </div>
  )
}

export default Form