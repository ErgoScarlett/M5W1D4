
import MyNav from '../components/NavBar/MyNav';
import MyFooter from '../components/MyFooter';
import AllTheBooks from '../components/AllTheBooks';
import Welcome from '../components/Welcom/Welcome';
import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { ThemeContext } from '../components/ThemeContextProvider';






const HomePage = () => {
  const {theme} = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('')

  return (

    <div className= 'App' 
    style={{background: theme === 'light'? '#F8F9FA' : '#333'}}>
      <MyNav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Container>
      <Welcome />
      <AllTheBooks searchQuery={searchQuery} />
      </Container>
      <MyFooter />
    </div>
  );
}

export default HomePage;