import '../styles/app.sass'
import { Header } from './Header'
import Catalog from './Catalog';
import { Login } from './Login'

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
    </div>
  );
}

export default App;
