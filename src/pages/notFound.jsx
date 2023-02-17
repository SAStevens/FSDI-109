import "./notFound.css";
import Home from './home';

function NotFound() {
    return ( 
        <div className="not-found">
            <img src="./images/404.webp" alt=""></img> 

            <div className='error-text'>
                <a href='/home'>
                    CLICK HERE TO RETURN HOME
                </a>
            </div>
        </div>

    );
}

export default NotFound; 