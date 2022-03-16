import logo from './logo.svg';
import './App.css';
import Users from './component/users';
import Home from './component/home';
// import Details from './component/details'
import {Routes, Route, Link, Router } from "react-router-dom";
import Profile from './component/Profile';

function App() {
  return (
    <>
    {/* <Router> */}
    <Routes>
      <Route path="/" element={<Users />} />
      {/* <Route path="/detail/:id" element={<Details/>} /> */}
      <Route path="/profile/:username" element={<Profile />} />

    </Routes>
    {/* </Router> */}
   
   
    </>
  );
}

export default App;
