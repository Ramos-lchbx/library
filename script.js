const myLibrary = [];

function Book(name, author, pages, read, id) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;
}

function addBookToLibrary(name, author, pages, read) {
    id = crypto.randomUUID();
    newBook = new Book(name, author, pages, read, id);
    myLibrary.push(newBook);
}

addBookToLibrary("Mistborn", "Brandon Sanderson", "639 pages", "already read");
addBookToLibrary("Mistborn 2", "Brandon Sandersonss", "6309 pages", "not read");

function loopTable(){
    for (let i = 0; i < myLibrary.length; i++){
        const body = document.querySelector("tbody")
        const table = document.getElementById("bookTable");

        body.innerHTML = "";
        console.log(myLibrary[i]);
        row = table.insertRow(-1)
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);

        cell1.textContent = `${myLibrary[i].name}`;
        cell2.textContent = `${myLibrary[i].author}`;
        cell3.textContent = `${myLibrary[i].pages}`;
        cell4.textContent = `${myLibrary[i].read}`;
        cell5.textContent = `${myLibrary[i].id}`;
    }
}

const addBookBtn = document.querySelector("[data-open-modal]")
const modal = document.querySelector("[data-modal]")
const submit = document.querySelector('button[type="submit"]')
const bName = document.getElementById("bname")
const bAuthor = document.getElementById("author")
const bPages = document.getElementById("pages")
const bRead = document.getElementById("read")

addBookBtn.addEventListener("click", () => {
    modal.showModal();
})

submit.addEventListener("click", () => {
    addBookToLibrary(bName.value, bAuthor.value, bPages.value, bRead.value);
    loopTable();
})



