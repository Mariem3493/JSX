import logo from './logo.svg';
import './App.css';
import './Component/Profile/FullName';
import FullName from './Component/Profile/FullName';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import 'bootstrap/dist/css/bootstrap.min.css';
import Address from './Component/Profile/Address';
function App() {
  return (
    <div>
 <FullName/>
 <Address/>
 <ProfilePhoto/>
    </div>
  );
}

export default App;
