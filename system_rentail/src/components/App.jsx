import '../styles/app.sass'
import { Header } from './Header'
import Rents from './Rents';
import { Login } from './Login'
import { Card } from './Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Rents>
        <Card/>
      </Rents>
    </div>
  );
}

export default App;