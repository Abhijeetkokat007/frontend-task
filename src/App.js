import img1 from './images/img1.svg';
import img2 from './images/img2.svg';
import logo from './images/logo.svg';
import profile from './images/profile.svg';
import eyesimg from './images/eyesimg.svg';
import powerfulimg  from './images/powerful-img.svg';
import dataimg from './images/data-img.svg';
import tonkean from './images/tonkean.svg';
import bigspring from './images/bigspring.svg';
import valuableimg from './images/valuableimg.svg';
import PipePoster from './component/PipePoster/PipePoster';



import './App.css';
import Navbar from './component/Navbar/Navbar';
import Header from './component/Header';
import Postermain from './component/Poster/Postermain';
import Postercircle from './component/Postercircle/Postercircle';
import MessagePoster from './component/MessagePoster/MessagePoster';
import Footer from './component/Footer/Footer';
import Signup from './component/Signup/Signup';

function App() {
  return (
    <div >
    





<Postermain/>

<div className='text-center card-poster p-5'>

<button className='btn-post-version mb-4'> <img src={eyesimg } alt='logo' />  Why Qubly </button>
<h1 className='text-post-2 text-center'>Get actionable insights from Big Data in 3 steps</h1>
<p className='light-text-p max-height-600'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

<div>
<img src={valuableimg } className='m-3' alt='logo' />
<img src={powerfulimg } className='m-3' alt='logo' />
<img src={dataimg } className='m-3' alt='logo' />
</div>
</div>


<Postercircle/>
<PipePoster/>
<MessagePoster/>
<Signup/>
<Footer/>
    </div>
  );
}

export default App;