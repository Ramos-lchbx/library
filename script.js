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

function loopTable(){
    const body = document.querySelector("tbody")
    body.innerHTML = "";

    for (let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
        row = body.insertRow(-1);
        cell1 = row.insertCell(0);
        cell2 = row.insertCell(1);
        cell3 = row.insertCell(2);
        cell4 = row.insertCell(3);
        cell5 = row.insertCell(4);
        cell6 = row.insertCell(5);
        cell7 = row.insertCell(6);

        let delButton = document.createElement("button")
        delButton.innerText = "Remove"
        delButton.className = "btn_rmv"
        delButton.dataset.id = myLibrary[i].id;

        let editButton = document.createElement("button")
        editButton.innerText = "Edit status"
        editButton.dataset.id = myLibrary[i].id;
        editButton.dataset.openEdit = "";

        cell1.textContent = `${myLibrary[i].name}`;
        cell2.textContent = `${myLibrary[i].author}`;
        cell3.textContent = `${myLibrary[i].pages}`;
        cell4.textContent = `${myLibrary[i].read}`;
        cell5.textContent = `${myLibrary[i].id}`;
        cell6.appendChild(delButton);
        cell7.appendChild(editButton);

        delButton.addEventListener("click", (e) => {removeBook(e.target.dataset.id)})
        editButton.addEventListener("click", (e) => {editStatus(e.target.dataset.id)})
    }
}

const addBookBtn = document.querySelector("[data-open-modal]")
const modal = document.querySelector("[data-modal]")
const submit = document.querySelector("button[data-submit-book]")
const bName = document.getElementById("bname")
const bAuthor = document.getElementById("author")
const bPages = document.getElementById("pages")
const bRead = document.getElementById("read")
const openEditModal = document.querySelector("[data-open-edit]")
const editModal = document.querySelector("[data-edit-modal]")
const subEdit = document.querySelector("[data-submit-edit]")
const editString = document.getElementById("stat")

addBookBtn.addEventListener("click", () => {
    modal.showModal();
})

submit.addEventListener("click", () => {
    addBookToLibrary(bName.value, bAuthor.value, bPages.value, bRead.value);
    loopTable();
})

function removeBook(id) {
    const index = myLibrary.findIndex(book => book.id === id)

    if (index !== -1) {
        myLibrary.splice(index, 1)
    }

    loopTable();

}

function editStatus(id) {
    editModal.showModal();
    const index = myLibrary.findIndex(book => book.id === id)
    subEdit.addEventListener("click", () => {
    if (index !== -1) {
        myLibrary[index].read = editString.value;
    }
    editString.value = "";

    loopTable();
})
}

