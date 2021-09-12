let books = [];

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

function makeChart(array) {
    for (let i=0; i<array.length; i++) {
        const chart = document.createElement('div');
        chart.classList.add('chart');
        container.appendChild(chart);
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'is read');

books.push(theHobbit);
console.log(books);




window.onload = function() {
    makeChart(books);
};