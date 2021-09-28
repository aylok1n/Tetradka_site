import React from 'react';
import './app.scss';
import Book from './components/book';
import BookInside from './components/book_inside';
import Modal from './modal/modal';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bookname: '',
      modal: false,
      books: [],
      activebook: {}
    }
  }

  async componentDidMount() {
    let storageBooks = await JSON.parse(localStorage.getItem('books'))
    if (storageBooks) {
      this.setState({ books: storageBooks })
    }
  }

  addBook = (title) => {
    this.setState(prevState => {
      return {
        books: [...prevState.books, {
          id: Date.now(),
          title: title,
          photo: []
        }]
      }
    }, () => localStorage.setItem('books', JSON.stringify(this.state.books)))
  }

  delete = (id) => {
    this.setState(prevState => {
      return {
        books: prevState.books.filter(i=>i.id != id)
      }
    }, ()=>localStorage.setItem('books', JSON.stringify(this.state.books)))
  }

  setActivePhoto = (photos) => {
    this.setState(prevState => {
      console.log(photos);
      return {
        activebook: {
          id:prevState.activebook.id,
          title:prevState.activebook.title,
          photo:[...prevState.activebook.photo, ...photos.map(i=>{return i.data_url})]
        }
      }
    }, ()=>{
      this.setState(prevState => {
        return {
          books: prevState.books.map(e=>{
            if(e.id === prevState.activebook.id) {
              return prevState.activebook
            } else {
              return e
            }
          })
        }
      }, ()=>localStorage.setItem('books', JSON.stringify(this.state.books)))
    })
  }

  render() {
    return (
      <div className="wrapper">
        <header>
          <h2>Tetradka</h2>
        </header>
        <section className="main">
          <div className="books_content">
            {this.state.books.map((item, index) =>
              <Book
                key={index}
                bookId={item.id}
                title={item.title}
                setActive={value => this.setState({ modalbook: value })}
                onClick={()=>this.setState({ activebook: item }, ()=>console.log(this.state.activebook))}
                delete={()=>this.delete(item.id)}
              />)}
            <div className="book_add" onClick={() => this.setState({ modal: true, bookname: this.title })}>
              <h2> Добавить книгу </h2>
            </div>
          </div>
        </section>
        <BookInside
          activebook = {this.state.activebook}
          active={this.state.modalbook}
          setActive={value => this.setState({ modalbook: value })}
          setActivePhoto={value => this.setActivePhoto(value)}
        />
        <Modal
          active={this.state.modal}
          setActive={value => this.setState({ modal: value })} addBook={this.addBook} />
      </div>
    );
  }
}

export default App;
