import NavBar from '../features/navbar/Navbar';
import UserOrders from '../features/user/components/UserOrders';

function UserOrdersPage() {
  return (
    <div>
      <NavBar>
        <h1 className='m-2 text-2xl font-medium'>My Orders</h1>
        <UserOrders></UserOrders>
      </NavBar>
    </div>
  );
}

export default UserOrdersPage;
