import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
/*import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import AllTheBooks from './components/AllTheBooks';
import Welcome from './components/Welcome';
import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from './components/ThemeContextProvider';*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import BookDetails from './pages/BookDetails';
import ErrorPage from './pages/ErrorPage';


function App() {

  return (<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Homepage />} />

      <Route path="/books/:asin" element={<BookDetails />} />

      <Route path="/*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  );
};
 

export default App;



/*   const {theme} = useContext(ThemeContext);  
const [searchQuery, setSearchQuery] = useState('')
<div className= 'App' style={{background: theme === 'light'? '#F8F9FA' : '#333'}}>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container>
      <Welcome />
      <AllTheBooks searchQuery={searchQuery} />
      </Container>
      <MyFooter />
    </div>
  );
}*/