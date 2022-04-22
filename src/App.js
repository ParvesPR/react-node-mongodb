import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='user/add' element={<AddUser></AddUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;