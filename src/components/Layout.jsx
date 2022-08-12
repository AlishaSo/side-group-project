import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Homepage from '../pages/Homepage';
import GetSong from '../pages/GetSong';
import MeetTeam from '../pages/MeetTeam';

export default function Layout() {
  return (
    <div className='Layout-div'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}