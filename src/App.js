import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Partials/footer/Footer';
import AppNavBar from './components/Partials/Navbar/Navbar';

function App() {
  return (
    <>
      <AppNavBar/>
      <Routes>
        <Route path='/' element={<Home />} >
          <Route index element={<h1>clipboard</h1>}/> 
          <Route path='clipboard' element={<h1>clipboard</h1>}/>
          <Route path='envelopes' element={<h1>envelopes</h1>}/>
          <Route path='noteBooks' element={<h1>noteBooks</h1>}/>
          <Route path='highlighter' element={<h1>highlighter</h1>}/>  
        </Route>
        <Route path='/shop' element={<h1>SHOP Page</h1>} />
        <Route path='/blogs' element={<h1>Blogs Page</h1>} />
        <Route path='/about' element={<h1>about Page</h1>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
