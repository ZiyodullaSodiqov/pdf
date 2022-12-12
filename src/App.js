import Compress from "./components/Compress/Compress";
import Navbar from "./components/Navbar/Navbar";
import Divide from "./components/Divide/Divide";
import Unite from "./components/Unite/Unite";
import Logged from './components/Form/Form';
import Loggedd from './components/login/Logged';
import MainComponent from './components/home-page/main/Main';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
   <>
   <Navbar />
   <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/marge" element={<Unite/>} />
        <Route path="/unite" element={<Unite/>} />
        <Route path="/divide" element={<Divide />} />
        <Route path="/compress" element={<Compress />} />
        <Route path="/logIn" element={<Logged />} />
        <Route path="/loginn" element={<Loggedd />}/>
   </Routes>
   </>
  );
}

export default App;
