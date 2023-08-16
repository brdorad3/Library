const library=[]


function addBook(){
let title=document.querySelector('#name').value
let author=document.querySelector('#author').value
let pages=document.querySelector('#pages').value
let newBook =  new book(title, author, pages);
library.push(newBook)
console.log(library)

}

function book(title,author, pages){
this.title=title;
this.author=author;
this.pages=pages;
}


const all=document.querySelector('.all');
const form=document.querySelector('#form')


const btn=document.querySelector('.btn');

btn.textContent='Add Book';

btn.addEventListener("click",()=>{
   showForm()
})


function showForm(){
   document.getElementById('form').style.display="grid";
}
const add=document.querySelector('.btn2')

add.addEventListener("click",(e)=>{
   e.preventDefault()
 addBook()
 addCard()
})
function addCard(){
   const card=document.querySelector('.card');
   card.style.display="flex"
   card.innerHTML+=`<p>${library[0].title}</p>`
   card.innerHTML+=`<p>${library[0].author}</p>`
   card.innerHTML+=`<p>${library[0].pages}</p>`
 
}
