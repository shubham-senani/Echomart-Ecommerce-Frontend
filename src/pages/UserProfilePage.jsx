import NavBar from '../features/navbar/Navbar';
import UserProfile from '../features/user/components/UserProfile';

function UserProfilePage() {
  return (
    <div>
      <NavBar>
        <h1 className='m-2 text-2xl font-medium'>My Profile</h1>
        <UserProfile></UserProfile>
      </NavBar>
    </div>
  );
}

export default UserProfilePage;