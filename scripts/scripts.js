let myLibrary = []; // main object array

// locate container variablers
const container = document.querySelector('.container');
const content = document.querySelector('.content');

function Book(title, author, pages, read) { // object constructor
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function makeChart() { // function to show array object content
    if (myLibrary.length == 0) { // if array is empty
        const chart = document.createElement('div');
        const info = document.createElement('div')

        chart.classList.add('chart');
        info.classList.add('empty');

        info.textContent = 'No books yet :(';

        chart.appendChild(info);
        container.appendChild(chart);
    
    }
    
    for (let i=0; i<myLibrary.length; i++) { // loop through the array and display all information for each book object and buttons
        const chart = document.createElement('div');
        const readBtn = document.createElement('button');
        const info = document.createElement('div');
        const del = document.createElement('button');

        chart.classList.add('chart');
        readBtn.classList.add('readBtn');
        readBtn.dataset.item = `${i}`;
        info.classList.add('info');
        del.classList.add('del');
        del.dataset.item = `${i}`;

        readBtn.textContent = 'Read';
        info.textContent = `${myLibrary[i].title} | ${myLibrary[i].author} | ${myLibrary[i].pages} | ${myLibrary[i].read}`;
        del.textContent = 'Delete';

        chart.appendChild(readBtn);
        chart.appendChild(info);
        chart.appendChild(del);
        container.appendChild(chart);

        // event listeners for buttons
        readBtn.addEventListener('click', changeReadStatus);
        del.addEventListener('click', deleteBook);
    }

    if (document.querySelector('.add') == null) { // if no add button  add it
        addAddBtn();
    }

    if (document.querySelector('.total') == null) {
        updateTotalBooks();
    }
}

function addAddBtn() { // to replace add button
    const addBtn = document.createElement('button')
    addBtn.classList.add('add');
    addBtn.textContent = 'Add Book';
    content.appendChild(addBtn);
    addBtn.addEventListener('click', addBookToLibrary);
}

function clearChart() { // clear current chart
    container.textContent = '';
}

function addBookToLibrary() { // function to create forms for user input for new book object
    const formContainer = document.createElement('div');
    formContainer.classList.add('formContainer');
    
    document.querySelector('.add').remove();
    document.querySelector('.total').remove();

    const addBook = document.createElement('form'); // form element

    const titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('placeholder', 'Title');

    const authorInput = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('placeholder', 'Author');

    const pagesInput = document.createElement('input');
    pagesInput.setAttribute('type', 'text');
    pagesInput.setAttribute('id', 'pages');
    pagesInput.setAttribute('placeholder', 'Pages');

    const readInput = document.createElement('input');
    readInput.setAttribute('type', 'text');
    readInput.setAttribute('id', 'read');
    readInput.setAttribute('placeholder', 'Read/Not Read');

    const submitBtn = document.createElement('button')
    submitBtn.classList.add('submitBtn');
    submitBtn.textContent = 'Submit';
    
    addBook.appendChild(titleInput);
    addBook.appendChild(authorInput);
    addBook.appendChild(pagesInput);
    addBook.appendChild(readInput);
    formContainer.appendChild(addBook);
    formContainer.appendChild(submitBtn);
    content.appendChild(formContainer);
    
    submitBtn.addEventListener('click', newBook);
}

function newBook() { // when submit button is clicked, add new book object to array
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value;

    const book = new Book(`${title}`, `${author}`, `${pages}`, `${read}`);
    myLibrary.push(book);
    
    document.querySelector('.formContainer').remove();
    clearChart();
    makeChart();
}

function deleteBook() { // remove selected book object from array
    const del = this.dataset.item;
    myLibrary.splice(`${del}`, 1);
    clearChart();
    makeChart();
}  

function changeReadStatus() { // change selected book object read attribute
    const readBtn = this.dataset.item;
    if (myLibrary[readBtn].read == 'Not Read') {
        myLibrary[readBtn].read = 'Read';
    }
    else {
        myLibrary[readBtn].read = 'Not Read';
    }

    clearChart();
    makeChart(); 
}

function updateTotalBooks() { // uses array size to update total book count
    const bookTotal = document.createElement('div');
    bookTotal.classList.add('total');
    bookTotal.textContent = `${myLibrary.length} total books!`;

    content.appendChild(bookTotal);
}

window.onload = function() { // make chart on page load
    makeChart();

};