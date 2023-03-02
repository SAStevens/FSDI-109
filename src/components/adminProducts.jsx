import "./adminProducts.css";
import { useEffect, useState } from 'react';
import DataService from './../services/dataService';

function AdminProducts() {
    const [product, setProduct] = useState({});
    const [allProducts, setAllProducts] = useState([]);

    useEffect(function() {
        loadProducts();
    }, []);

    async function loadProducts() {
        let service = new DataService();
        let prods = await service.getProducts();
        setAllProducts(prods);

    }

    function textChanged(e) {
        let text = e.target.value;
        let attr = e.target.name; 

        let copy = {...product};
        copy[attr] = text;
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
        // TODO: Price should be a number but is a string
        let savedProd = {...product};
        savedProd.price = parseFloat(savedProd.price);
        let service = new DataService();
        service.saveProduct(savedProd);

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    return (
        <div className='add-products'>
            <h3>Create New Products</h3>

            <div className='my-control'>
                <label className="form-label">Title:</label>
                <input name="title" onChange={textChanged} className="form-control" type="text" />
            </div>

            <div className='my-control'>
                <label className="form-label">Category:</label>
                <input name="category" onChange={textChanged} className="form-control" type="text" />
            </div>

            <div className='my-control'>
                <label className="form-label">Image Name:</label>
                <input name="image" onChange={textChanged} className="form-control" type="text" />
            </div>

            <div className='my-control'>
                <label className="form-label">Price:</label>
                <input name="price" onChange={textChanged}className="form-control" type="number" />
            </div>

            <div className="my-control center">
                <button onClick={saveProduct} className="btn btn-sm btn-outline-primary">Save Product</button>
            </div>

            <div>
                <ul>
                    {allProducts.map(prod => 
                        <li key={prod.title}>{prod.title} -${prod.price}</li>
                    )}
                </ul>
            </div>

        </div>
    );
}
    export default AdminProducts;
    