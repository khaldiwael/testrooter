import './App.css';
import Users from './component/users';
import {Routes, Route, Link, Router } from "react-router-dom";
import Profile from './component/Profile';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/profile/:username" element={<Profile />} />
    </Routes>
    </>
  );
}
export default App;
