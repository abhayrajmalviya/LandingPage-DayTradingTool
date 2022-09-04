// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Middle from './components/Middle';
import { GrFacebook } from 'react-icons/gr';
import { GrTwitter } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';

import Screen2  from './assests/screen_2.png';
import Screen3  from './assests/screen_3.png';
import Screen4  from './assests/screen_4.png';
import Screen5  from './assests/screen_5.png';

function App() {
  return (
    <div className="main">
      <header className='home'>
      <div className='container'>
        <Header/>

        <Middle/>
        {/* <div className='social-media'>
          <GrFacebook />
          <GrTwitter/>
          <GrInstagram/>
        </div> */}
      </div>
    </header>
    <section className='working'>
        <h1>How it works?</h1>
        <div className='card-container'>
          <div className='card'>
            <img 
              src={Screen2}
              alt="screen2" 
            />
          </div >
          <div className='card'>
            <img 
                src={Screen3}
                alt="screen3" 
              />
          </div>
          <div className='card'>
            <img 
                src={Screen4}
                alt="screen4" 
              />
          </div >
          <div className='card'>
          <img 
              src={Screen5}
              alt="screen5" 
            />
          </div >
        </div>
    </section>
    </div>
    
  );
}

export default App;
