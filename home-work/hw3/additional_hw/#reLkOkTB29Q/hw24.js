
let books = [
    {name: 'The Hobbit', pages: 310, authors: ['J.R.R. Tolkien'], genres: ['Fantasy']},
    {name: '1984', pages: 328, authors: ['George Orwell', 'J.R.R. Tolkien'], genres: ['Dystopian', 'Science Fiction']},
    {name: 'To Kill a Mockingbird', pages: 281, authors: ['Harper Lee'], genres: ['Drama']},
    {name: ' The Great Gatsby The Great Gatsby   ', pages: 180, authors: ['F. Scott Fitzgerald'], genres: ['Classic', 'Tragedy']},
    {name: 'Harry Potter and the Sorcerer’s Stone', pages: 309, authors: ['J.K. Rowling'], genres: ['Fantasy', 'Adventure']},
    {name: 'The Da Vinci Code', pages: 489, authors: ['Dan Brown', 'J.R.R. Tolkien'], genres: ['Thriller', 'Mystery']},
    {name: 'The Catcher in the Rye', pages: 277, authors: ['J.D. Salinger'], genres: ['Classic', 'Coming-of-age']},
    {name: 'Brave New World', pages: 288, authors: ['Aldous Huxley'], genres: ['Science Fiction']},
    {name: 'The Lord of the Rings', pages: 1178, authors: ['J.R.R. Tolkien'], genres: ['Fantasy', 'Epic']},
    {name: 'Pride and Prejudice', pages: 279, authors: ['Jane Austen', 'J.R.R. Tolkien'], genres: ['Romance', 'Classic']},
    {name: 'The Martian', pages: 369, authors: ['Andy Weir'], genres: ['Science Fiction']}
];

// let biggestBook = books[5];
// for (let book1 of books) {
//     if (book1.pages > biggestBook.pages) {
//
//         biggestBook = book1;
//     }
// }
// console.log(biggestBook);
//
// let maxGenres = books[0].genres.length;
// let booksGanres = books[0];
//
// for (let i = 1; i < books.length; i++) {
//     const currentLength = books[i].genres.length;
//
//     if (currentLength > maxGenres) {
//         maxGenres = currentLength;
//         booksGanres = [books[i]];
//     } else if (currentLength === maxGenres) {
//         booksGanres.push(books[i]);
//     }
//
// }
// console.log(booksGanres);

// let biggestBook = books[0];
// for (let book1 of books) {
//     if (biggestBook.pages < book1.pages) {
//         biggestBook = book1;
//     }
// }
// console.log(biggestBook);
//
// let maxGanres = books[0].genres.length;
// let booksGanres = [books[0]];
//
// for (let i = 0; i < books.length; i++) {
//     const currentLength = books[i].genres.length;
//
//     if (currentLength > maxGanres) {
//         maxGanres = currentLength ;
//         booksGanres = [books[i]];
//     }
//     else if (currentLength === maxGanres) {
//         booksGanres.push(books[i]);
//     }
// }
// console.log(booksGanres);
//
// let maxName = books[0].name.length;
// let booksName = [books[0]];
//
// for (let j = 0; j < books.length; j++) {
//     const currentName = books[j].name.length;
//
//     if (currentName > maxName){
//         maxName = currentName;
//         booksName = [books[j]];
//     }
//
//     else if (currentName === maxName){
//         booksName.push(books[j]);
//     }
// }
// console.log(booksName);
//
// let maxAuthors = books[0].authors.length;
// let booksAuthors = [books[0]];
// for (let y = 0; y < books.length; y++) {
//     const currentAuthor = books[y].authors.length;
//
//     if(currentAuthor > maxAuthors){
//         maxAuthors = currentAuthor;
//         booksAuthors = [books[y]];
//     }
//     else if (currentAuthor === maxAuthors){
//         booksAuthors.push(books[y]);
//     }
// }
// console.log(booksAuthors);
//
// let minAuthors = books[0].authors.length;
// let booksAuthor = [books[0]];
//
// for (let x = 0; x < books.length; x++){
//     const currentOneAuthor = books[x].authors.length;
//
//     if (currentOneAuthor < minAuthors){
//         minAuthors = currentOneAuthor;
//         booksAuthor = [books[x]];
//     }
//     else if (currentOneAuthor === minAuthors){
//         booksAuthor.push(books[x]);
//     }
// }
// console.log(booksAuthor);

