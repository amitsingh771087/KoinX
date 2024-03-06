
import './App.css';
import Header from "./Components/Header/Header.jsx";
import GetStart from './Components/Left-Pannel/GetStart/GetStart.jsx';

function App() {
  return (
    <>
      <Header />
      <div className='main'>
          <div className='left-pannel'>
            Hello
          </div>
          <div className='right-pannel'>
            <GetStart />
          </div>
      </div>

    </>
  );
}

export default App;
