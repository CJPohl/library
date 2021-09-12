function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'is read');
console.log(theHobbit.info());