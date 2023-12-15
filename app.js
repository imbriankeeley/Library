

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render() {
    let libraryEl = document.querySelector('.library');
    libraryEl.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.innerHTML = 
        `
        <div class="card">
            <h1>${book.title}</h1>
            <h2>by ${book.author}</h2>
            <h2>${book.pages} pages</h2>
            <button class="read-btn" onclick="toggleRead(${i})">${book.read ? 'Read' : 'Not Read Yet'}</button>
            <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
        </div>
        `
        libraryEl.appendChild(bookEl);
    }
    
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    render()
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let pages = document.querySelector('#pages').value
    let read = document.querySelector('#read').checked

    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

let newBookForm = document.querySelector('#add-book-form');

let newBookbtn = document.querySelector("#add-book")
newBookbtn.addEventListener('click', function() {
    newBookForm.style.display = 'block';
})

document.querySelector('#add-book-form').addEventListener("submit", function() {
    event.preventDefault();
    addBookToLibrary()
    newBookForm.style.display = 'none';
})