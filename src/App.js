import { BrowserRouter,Route,Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Pages
import {Home,Checkoutpage} from './pages';

//Components
import {Header,Footer} from './components';
import { useState } from "react";
import {Navbar} from "./components/navbar/Navbar";
export function App() {

  return (
    <div className="App">
      <div></div>
    
    <BrowserRouter>
    <ToastContainer/>
    <Navbar/>
    <Header />
    
    <Routes>
    <Route path="/"exact element={ <Home/>} />
   <Route path="/checkoutpage" exact element={<Checkoutpage/>} />
   </Routes>
    <Footer/>
    </BrowserRouter>
  </div>

  );
}
export default App;

