import AdminProducts from "../components/adminProducts";
import "./admin.css";
import CouponCodes from './../components/adminCouponCodes';

function Admin() {
    return (
    <div className='admin'>
        <h1>Store Administration</h1>

        <div className='parent'>

            <AdminProducts></AdminProducts>

        </div>

        <div className='saver'>

            <CouponCodes></CouponCodes>

        </div>


    </div>

    );

}



export default Admin;
