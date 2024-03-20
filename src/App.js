import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';
import Welcome from './components/Welcome';
import book from './books/horror.json';
import { useContext, useState } from 'react';
import { ThemeContext } from './components/ThemeContextProvider';


function App() {

const {theme} = useContext(ThemeContext);  
const [search, setSearch] = useState('')

  return (
    <div className= {`App ${theme}`}>
      <MyNav search={search} setSearch={setSearch} />
      <Welcome />
      <AllTheBooks search={search} book = {book} />
      <MyFooter />
    </div>
  );
}

export default App;
