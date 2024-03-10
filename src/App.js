import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './MyNav';
import MyFooter from './MyFooter';
import AllTheBooks from './AllTheBooks';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </div>
  );
}

export default App;
