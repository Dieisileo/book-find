import '../styles/CardBook.css'

export function CardBook({ book }) {
  console.log(book)
  return (
      <div className="cardBook">
        <div className="titleBook">{book.volumeInfo.title}</div>
        <div className="imageBook">
          <img
            src="https://lorempixel.com/books/150/200/"
            alt="Imagem do livro"
          />
        </div>
        <div className="descriptionBook">
          <p className="author">
            <strong>Autor:</strong>
            {book.volumeInfo.authors}
          </p>
          <p className="publishedDate">
            <strong>Publicado em:</strong>
            {book.volumeInfo.publishedDate}
          </p>
          <p className="publisher">
            <strong>Editora:</strong>
            {book.volumeInfo.publisher}
          </p>
        </div>
      </div>
  )
}
