import logo from './logo.svg';
import './App.css';


const books = [
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    author: 'awal kurniawan',
    title: 'I Love you to the moon and back'
  },
  {
    img: 'http://yrama-widya.co.id/wp-content/uploads/2015/12/Sejarah_u__SMA_M_555ee05972414.jpg',
    author: 'Samsul Farid',
    title: 'Sejarah untuk SMA/MA kelas X',
  }
]


function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {

        const { img, title, author } = book;
        return (
          <Book book={book}></Book>
        )
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book

  return (
    <article className='book'>
      <img src={img} alt='' width='200' height='250' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}



function App() {
  return (
    <div className="App">
      <BookList />
    </div>
  );
}

export default App;
