import "./adminCouponCodes.css";
import { useState } from 'react';


function AdminCouponCodes() {
    const [couponCodes, setCouponCodes] = useState({});



    function textChanged(e) {
        let text = e.target.value;
        let attr = e.target.name; 

        let copy = {...couponCodes};
        copy[attr] = text;
        setCouponCodes(copy);
    }
    
    function save() {
        console.log(couponCodes);

    }

    return (

        <div className='ad-Coupons'>
            <h3>Create New Coupons</h3>

            <div className='my-control'>
                <label className="form-label">Coupon Code:</  label>
                <input name="code" onChange=   {textChanged} className="form-control"     type="text" />
            </div>  

            <div className='my-control'>
                <label className="form-label">Discount:</  label>
                <input name="discount" onChange={textChanged} className="form-control"     type="number" />
            </div>  

            <div className="my-control center">
                <button onClick={save} className="btn btn-sm btn-primary">Save Coupon Codes</button>
            </div>


        </div>



    )









}








export default AdminCouponCodes;