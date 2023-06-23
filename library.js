let myLibrary = [];
const newBookBtn = document.querySelector("#new-book-btn")
const buttonDiv = document.querySelector(".button-div")
const submitBtn = document.querySelector("#submit");

function Book(title, author, pages, read) { 
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}
function toggleRead(index) { 
    myLibrary[index].toggleRead();
    render();
}
function render() { 
    let libraryEl= document.querySelector(".library");
    libraryEl.innerHTML = "";
    
    for ( let i = 0; i < myLibrary.length; i++) { 
        let book = myLibrary[i];
        let bookEl = document.createElement('div');
        bookEl.setAttribute('class', 'book-card')
        bookEl.innerHTML = `
        <div class="card-container">
        <div class="card-header">
        <h3 class="title"> Title: ${book.title}</h3>
        <h5 class="author"> Author: ${book.author} </h5>
        </div>
        <div class="card-body">
        <p class="pages"> ${book.pages} Pages </p> 
        <p class="read-status"> ${book.read ? "Read" : "Not Read"} </p> 
        <button class="remove-btn" onclick="removeBook(${i})"> Remove Book </button>
        <button class="read-btn" onclick="toggleRead(${i})"> Change Read Status </button>
        </div>
        </div>`
        
        libraryEl.appendChild(bookEl);
    }
}
function removeBook(index) { 
    myLibrary.splice(index, 1);
    render();
}
function addBookToLibrary() { 
    let title = document.querySelector("#book-title").value;
    let author = document.querySelector("#book-author").value;
    let pages = document.querySelector("#book-pages").value;
    let read = document.querySelector("#book-title").checked;
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    render();
}
function showForm() { 
    newBookBtn.addEventListener('click', () => { 
        buttonDiv.style.display = "none";
     })
}
newBookBtn.addEventListener('click', () => { 
    let newBookForm = document.querySelector("#form-hidden");
    console.log(newBookForm);
    newBookForm.style.display = "flex";
})
document.querySelector("#form-hidden").addEventListener("submit", (event) => { 
    event.preventDefault();
    addBookToLibrary();
})
document.querySelector("#book-read").addEventListener('click', () => { 
   if (bookEl.classList("read-status") === "Read") { 
    bookEl.classList("read-status").textContent = "Read";
   } else (bookEl.classList("read-status") === "Not Read"); { 
    bookEl.classList("read-status").textContent = "Not Read"
   }
})