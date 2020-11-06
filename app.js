// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//UI Constructor
function UI() {

}


//Event Listernes
document.getElementById('book-form').addEventListener('submit', function(e) {
  e.preventDefault()
  // Get forms value
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  //Instatiate book
  const book = new Book(title, author, isbn)

  //Instatiate UI
  const ui = new UI();
  //Add book to list'
  ui.addBookToList(book)
})