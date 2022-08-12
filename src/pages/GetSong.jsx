import { useState } from 'react';

export default function GetSong() {
  const [song, setSong] = useState('');

  const handleSubmit = () => {

  }

  return (
    <div id='song' className='song-div'>
      {/* {song ?  */}
        <div className='form'>
          <h2>Enter a phone number and get a YouTube video tailored to you</h2>
          <form onSubmit={ handleSubmit }>
            <input
              placeholder='(999) 999-9999'
            />
            <button className='btn submit-btn'>Submit</button>
            <br />
            <input type='checkbox' />
            <label>Check this box if you would like to receive the link via text*</label>
          </form>
          <p className='disclaimer-p'>* can only send text to US phone numbers</p>
        </div>
        {/* :
        <div>
          <iframe src="" frameborder="0"></iframe>
        </div>
      } */}
    </div>
  )
}