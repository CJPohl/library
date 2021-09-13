let myLibrary = [];

const container = document.querySelector('.container');


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'Read');
const harryPotter = new Book('The Sorcerors Stone', 'J.K. Rowling', '234', 'Not Read');
const theShining = new Book('The Shining', 'Steven King', '430', 'Not Read');

myLibrary.push(theHobbit);
myLibrary.push(harryPotter);
myLibrary.push(theShining);

console.log(myLibrary);


function makeChart() {
    for (let i=0; i<myLibrary.length; i++) {
        const chart = document.createElement('div');
        const readBtn = document.createElement('button');
        const info = document.createElement('div');
        const del = document.createElement('button');
        chart.classList.add('chart');
        chart.dataset.item = `book${i}`;
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

        readBtn.addEventListener('click', changeReadStatus);
        del.addEventListener('click', deleteBook);
    }
}

function clearChart() {
    container.textContent = '';
}

function deleteBook() {
    const del = this.dataset.item;
    for (let i=del; i<(del+1); i++) {
        myLibrary.splice(`${i}`, 1);
    }
    clearChart();
    makeChart();
}  

function changeReadStatus() {
    const readBtn = this.dataset.item;
    for (let i=readBtn; i<(readBtn+1); i++) {
        if (myLibrary[i].read == 'Read') {
            myLibrary[i].read = 'Not Read';
        }
        if (myLibrary[i].read == 'Not Read') {
            myLibrary[i].read = 'Read';
        }
        
    }
    clearChart();
    makeChart(); 
}






window.onload = function() {
    makeChart();
};