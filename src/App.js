import logo from './logo.svg';
import './App.css';




const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
  author: 'awal kurniawan',
  title: 'I Love you to the moon and back'
}

const secondBook = {
  img: 'http://yrama-widya.co.id/wp-content/uploads/2015/12/Sejarah_u__SMA_M_555ee05972414.jpg',
  author: 'Samsul Farid',
  title: 'Sejarah untuk SMA/MA kelas X',
}


function BookList() {
  return (
    <section className='booklist'>
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  )
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt='' width='200' height='250' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
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
