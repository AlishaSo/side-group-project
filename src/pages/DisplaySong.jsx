import { useState } from 'react'

export default function DisplaySong() {
  const [eventInfo, setEventInfo] = useState(null);
  
  return (
    <div>
      {
        eventInfo ?
          <iframe src='' frameborder='0'></iframe>
        :
        <a href='#'>Buy tickets for the 25th</a>
      }
    </div>
  )
}