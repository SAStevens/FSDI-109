import "./notFound.css";

function NotFound() {
    return (
    <div className="not-found">
        <img src="./images/404.webp" alt=""></img>

        <div className='error-text'>
            <a className='btn btn-dark' href='./home'>
                Click to Return Home
            </a>
        </div>
    </div>
    );
}

export default NotFound; 