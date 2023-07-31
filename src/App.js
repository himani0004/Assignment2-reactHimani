//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <div className='left-bar'>
          <ul className='ul-left'>
            <li><a href="https://www.atlassian.com/"><img src={require('./images/pogoAt.png')} atl='Atlassian' height="25px" width="200px"></img></a></li>
            <li><a className='list-left' href=".">Products</a></li>
            <li><a className='list-left' href=".">For Teams</a></li>
            <li><a className='list-left' href=".">Support</a></li>
          </ul>
        </div>
        <div className='right-bar'>
          <ul className='ul-right'>
            <li><a className='list-right' href="."><img src={require('./images/search.png')} atl='search' height="20px" width="20px"></img></a></li>
            <li><a className='list-right-1' href=".">Try now</a></li>
            <li><a className='list-right' href=".">|</a></li>
            <li><a className='list-right' href=".">Log In </a></li>
          </ul>
        </div>
      </div>

      <div className='content-main'>
        <img src={require('./images/background.jpg')} className='main-image' alt='Background'></img>
        <div className='main-info'>
          <h1>Move work<br/>forward</h1>
          <p>Atlassian helps teams work smarter and faster,<br/>together</p>
          <button className='learn-more-button'>Learn More</button>
        </div>
      </div>

    </div>
  );
}

export default App;