import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
// import Navbar from './components/Partials/Navbar/Navbar';
import Footer from './components/Partials/footer/Footer';
import NavBar from './components/Partials/Navbar/NavBar';
// import NavBar from './components/Partials/Navbar/NavBar';
// import Navbar from './components/Partials/navbar/Navbar';

// import Navbar from './components/Partials/navbar/Navbar';
// import Footer from './components/Partials/footer';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<h1>clipboard</h1>}/> 
          <Route path='clipboard' element={<h1>clipboard</h1>}/>
          <Route path='envelopes' element={<h1>envelopes</h1>}/>
          <Route path='noteBooks' element={<h1>noteBooks</h1>}/>
          <Route path='highlighter' element={<h1>highlighter</h1>}/>  
        </Route>
        <Route path='/shop' element={<h1>SHOP Page</h1>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
