import './App.css';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import Appointment from './pages/Appointment/Appointment';
import About from './pages/About/About';
import ContactUs from './pages/ContactUs/ContactUs';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';
import Reviews from './pages/Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import RequireAuth from './pages/RequireAuth/RequireAuth';
function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
