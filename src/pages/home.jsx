import './home.css';
import {Link} from 'react-router-dom';

function Home() {
    return (
    <div className="home">
        <h1>Welcome to Wade's Shades</h1>
        <h4>Stylin' Shades Just A Click Away!</h4>

        <Link className='btn btn-primary' to='/catalog'>Click here to see the catalog</Link>

    </div>
    );
}

export default Home;  