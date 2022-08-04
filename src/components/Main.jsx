import {Routes, Route} from 'react-router-dom';
import Homepage from './Homepage';

export default function Main() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </main>
  )
}