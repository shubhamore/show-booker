import './App.css';
import {Routes,Route} from 'react-router-dom'
import Bookings from './pages/Bookings';
import Home from './pages/Home';
import DetailedShow from './pages/DetailedShow';
import SearchedShow from './pages/SearchedShow';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/booking' element={<Bookings />}/>
        <Route path='/show/:id' element={<DetailedShow />}/>
        <Route path='/search/shows' element={<SearchedShow />}/>
      </Routes>
    </div>
  );
}

export default App;
