import './home.css';
import {Link} from 'react-router-dom';

function Home() {
    return (
    <div className="home">
        <h1>Welcome to Wade's Shades</h1>
        <h4>Where The Hottest Stylin' Shades Are Just A Click Away!</h4>

    <br></br>
    <br></br>

    <div>
          <img src="./images/Sun Glasses.webp" alt="" width="600px"></img>
    </div>

        <br></br>
        <br></br>

            <Link className='btn btn-outline-dark' to='/catalog'>Click here to see the catalog</Link>

    </div>
    );
}

export default Home;  