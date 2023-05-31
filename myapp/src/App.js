/*importation du css du composant parent*/
import './App.css';
/*Importation du composant FullName*/
import FullName from './Component/Profile/FullName';
/*Importation du composant ProfilePhoto*/
import ProfilePhoto from './Component/Profile/ProfilePhoto';
/*Importation du css du boostrap*/
import 'bootstrap/dist/css/bootstrap.min.css';
/*Importation du composant Address*/
import Address from './Component/Profile/Address';
/*Fonction pour appel aux composants*/
function App() {
  /*Appel au composants FullName , Address, ProfilePhoto*/
  return (
    <div>
 <FullName/>
 <Address/>
 <ProfilePhoto/>
    </div>
  );
}

export default App;
