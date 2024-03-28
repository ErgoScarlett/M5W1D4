import { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { ThemeContext } from './ThemeContextProvider';
import { Link } from "react-router-dom";


const SingleBook = ({ setSelected, selected, book }) => {
  const {theme} = useContext(ThemeContext);
  const handleClick = () => {
    if (selected === book.asin){
      setSelected(null);
    } else {
    setSelected(book.asin);
  }
}
    
  return (
    <>
      <Card bg={theme} data-bs-theme={theme} style={{ width: '100%', height: '600px', marginBottom: '20px'}} onClick={handleClick} className= {selected === book.asin? 'selected':''}>
        <Card.Img variant="top" src={book.img} style={{ height: '400px'}} />
        <Card.Body>
          <Card.Title style={{fontSize: '15px'}}>{book.title}</Card.Title>
          <Card.Text>{`Category: ${book.category}`}</Card.Text>
          <Card.Text>{`Price: $${book.price}`}</Card.Text>
          <Button
          as= {Link}
          to={`/books/${book.asin}`}
          variant="outline-success"
          size="sm">
            Vedi Dettagli</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SingleBook




/*function SingleBook({ book }) {
  const [selected, setSelected] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const handleClick = () => {
    setSelected(!selected);
      setShowComments(!showComments);
  }

  const {theme} = useContext(ThemeContext);
  const { title, img, price, category } = book;
  return (
    <Col>
      <Card bg={theme} data-bs-theme={theme} style={{ width: '100%', height: '600px', marginBottom: '20px'}} onClick={handleClick} className= {selected ? "selected" : ""}>
        <Card.Img variant="top" src={img} style={{ height: '450px'}} />
        <Card.Body>
          <Card.Title style={{fontSize: '15px'}}>{title}</Card.Title>
          <Card.Text>{`Category: ${category}`}</Card.Text>
          <Card.Text>{`Price: $${price}`}</Card.Text>
        </Card.Body>
      </Card>
      {showComments && <CommentArea asin={book.asin} /> }
    </Col>
  );
}

export default SingleBook;

<Card
        onClick={handleClick () => setSelected(book.asin)}
        style={{
          border: selected === book.asin ? '3px solid red' : 'none',
        }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>{book.title}</Card.Title>
        </Card.Body>
      </Card>*/