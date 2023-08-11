
const books = [
    {
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        year: 1925,
        genre: 'Novel'
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
        genre: 'Southern Gothic'
    },
    {
        title: '1984',
        author: 'George Orwell',
        year: 1949,
        genre: 'Dystopian'
    },
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813,
        genre: 'Romance'
    }
];


function getBookSummary(t, a){
        const BookSummary = {t, a}
        console.log(BookSummary);
    
}

for(let i = 0; i < books.length; i++){
    getBookSummary(books[i].title, books[i].author)
}

getBookSummary()