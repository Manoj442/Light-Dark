import logo from './logo.svg';
import './App.css';
import {Header as CaptureHeader} from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import {Context} from './context/ThemeContext';
function App() {
  return (
    <>
    <Context>
      <CaptureHeader/>
      <Main/>
      <Footer/>
      </Context>
    </>  );
}

export default App;
