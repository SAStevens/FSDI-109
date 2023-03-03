import './cart.css'
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../store/dataContext';

function Cart() {

    const cart = useContext(DataContext).cart;

    return (
    <div className="cart">
        <h1>Welcome to Wade's Shades</h1>
        <h4>You have {cart.length} products in the cart</h4>

        <br></br>
        <br></br>
    
        {cart.map((prod)=>(
            <div className="prod-row">
                <img src={'/images/' + prod.image} alt=""></img>
                <h5>
                    {prod.title}
                </h5>

                <label>Qty: {prod.quantity}</label>
                <label>${prod.price * prod.quantity}</label>
                
                <button className="btn btn-sm btn-danger">Delete</button>
            </div>

        ))}

        <Link className='btn btn-primary' to='/catalog'>Click here to see the catalog</Link>
    </div>
    );
}

export default Cart;