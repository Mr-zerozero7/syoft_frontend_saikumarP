// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';


// I used protected route for dashboard access
// used BrowserRouter, Routes to Switch pages
// used route to fetch page elements 
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route eaxct element={<ProtectedRoute/>}>
          <Route exact path='/' element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
