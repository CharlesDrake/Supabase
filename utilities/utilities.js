import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'
const supabase = createClient('https://kncpxougvldubgtuqpyn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtuY3B4b3VndmxkdWJndHVxcHluIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA3NzIwNzcsImV4cCI6MjAyNjM0ODA3N30.r7Z0q1iWbLbmbOdhKKPgvZsT4JXstUKILfk1h0TMzX4') 

async function getBooks(){
    let { data: Books, error } = await supabase
    .from('Books')
    .select('*')
    
    for (let book of Books){
        let bookList = document.getElementById('books');
        bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td><td>${book.isbn}</td></tr>`;
    }
}

getBooks();