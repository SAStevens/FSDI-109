import "./admin.css";
import AdminProducts from "../components/adminProducts";
import CouponCodes from './../components/adminCouponCodes';

function Admin() {
    return (
    <div className='admin'>
        <h1>Store Administration</h1>

        <div className='parent'>

            <AdminProducts></AdminProducts>

        </div>

        <div className='coupon'>

            <CouponCodes></CouponCodes>

        </div>
    </div>
    );
}

export default Admin;
