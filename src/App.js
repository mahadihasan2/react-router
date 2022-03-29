import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Friends/Friends';
import About from './components/About/About';
import { Route, Routes } from 'react-router-dom';
import Global from './components/Global/Global';
import Header from './components/Header/Header';
import FriendDatils from './components/FriendDeatils/FriendDatils';

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendId' element={<FriendDatils></FriendDatils>}></Route>
        <Route path='/About' element={<About></About>}></Route>
        <Route path='*' element={<Global></Global>}></Route>
      </Routes>
    </div>
  );
}

export default App;
