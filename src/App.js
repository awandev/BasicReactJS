import logo from './logo.svg';
import './App.css';


const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    author: 'awal kurniawan',
    title: 'I Love you to the moon and back'
  },
  {
    id: 2,
    img: 'http://yrama-widya.co.id/wp-content/uploads/2015/12/Sejarah_u__SMA_M_555ee05972414.jpg',
    author: 'Samsul Farid',
    title: 'Sejarah untuk SMA/MA kelas X',
  }
]


function BookList() {
  return (
    <section className='booklist'>
      {books.map((book, index) => {

        return (
          <Book {...book} key={book.id}></Book>
        )
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {


  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert('hello')
  }

  const complexExample = (author) => {
    console.log(author)
  }

  return (
    <article className='book'>
      <img src={img} alt='' width='200' height='250' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>reference example</button>

      <button type='button' onClick={complexExample(author)}>Complex Handler</button>

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
