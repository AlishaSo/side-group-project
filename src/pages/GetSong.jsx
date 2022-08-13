import { useState } from 'react';
import DisplaySong from './DisplaySong';

export default function GetSong() {
  const [song, setSong] = useState(null);

  const handleSubmit = () => {

  }

  return (
    <div className='song-div'>
      {
        song == null ? 
          <div className='form'>
            <h2>Enter a phone number and get a YouTube video tailored to you</h2>
            <form onSubmit={ handleSubmit }>
              <input
                type='text'
                placeholder='(999) 999-9999'
              />
              <button className='btn submit-btn'>Submit</button>
              <br />
              <label>
              <input type='checkbox' />Check this box if you would like to receive the link via text*</label>
            </form>
            <p className='disclaimer-p'>* can only send text to US phone numbers</p>
          </div>
        :
          <DisplaySong />
      }
    </div>
  )
}