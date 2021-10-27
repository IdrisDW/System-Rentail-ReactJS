import '../styles/app.sass'
import { Header } from './Header'
import { PersonalData } from './PersonalData'
import Catalog from './Catalog';
 
import { Login } from './Login'
 

function App() {
  return (
    <div className="App">
      <Header />
      <PersonalData />
      {/* <Catalog /> */}
    </div>
  );
}

export default App;