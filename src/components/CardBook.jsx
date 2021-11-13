import '../styles/CardBook.css'

export function CardBook({ book }) {
  return (
      <div className="cardBook">
        <div className="titleBook">{book.volumeInfo.title}</div>
        <div className="imageBook">
          <img
            src={!!book.volumeInfo.readingModes.image ? book.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/2000px-Placeholder_book.svg.png"}
            alt="Imagem do Livro"
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
