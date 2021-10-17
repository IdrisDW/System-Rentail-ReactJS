import '../styles/app.sass'
import { Header } from './Header'
import Catalog from './Catalog';
import { Login } from './Login'
import  PersonalData  from './PersonalData';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
       {/* <Catalog /> */}
      <PersonalData/>
    </div>
  );
}

export default App;
