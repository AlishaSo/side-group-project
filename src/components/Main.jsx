import {Routes, Route} from 'react-router-dom';
import Homepage from '../pages/Homepage';
import GetSong from '../pages/GetSong';
import MeetTeam from '../pages/MeetTeam';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/get-song' element={<GetSong />} />
        <Route path='/meet-team' element={<MeetTeam />} />
      </Routes>
    </main>
  )
}