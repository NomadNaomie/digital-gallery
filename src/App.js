import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Turing from './components/Turing';
import About from './components/About';
import ListOfWorks from './components/ListOfWorks';
import { Route,Routes } from 'react-router-dom';
import Topbar from './components/Topbar';
import SubmitWork from './components/SubmitWork';
import ContactUs from './components/ContactUs';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <>
          <Topbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Gallery" element={<Gallery/>}/>
    <Route path="/AIQuiz" element={<Turing/>}/>
    <Route path="/AboutUs" element={<About/>}/>
    <Route path="/ListOfWorks" element={<ListOfWorks/>}/>
    <Route path="/SubmitWork" element={<SubmitWork/>}/>
    <Route path="/ContactUs" element={<ContactUs/>}/>
    <Route path="*" element={<NotFoundPage/>} />
    </Routes>
    
    </>
  );
}

export default App;
