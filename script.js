const library=[]


function addBook(){
let title=document.querySelector('#name').value
let author=document.querySelector('#author').value
let pages=document.querySelector('#pages').value
let read=document.getElementById('check').checked
let newBook =  new book(title, author, pages, read);
library.push(newBook)
console.log(library)
}
class book{
   constructor(title, author, pages, read){
      this.title=title
      this.author=author
      this.pages=pages
      this.read=read
   }
}

book.prototype.toggleRead= function(){
   this.read = !this.read
}
function toggleRead(index){
library[index].toggleRead()
addCard()
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

function signup(event){
event.preventDefault()
addBook()
addCard()
}

   function remove(index){
      library.splice(index,1)
      addCard()
    
   }
   
   function addCard(){
      const cards = document.querySelector('.cards');
      cards.innerHTML = ""
   
      for(let i = 0; i < library.length; i++) {
         const card = document.createElement('div');
         card.classList = 'card';
         card.style.display = 'grid';
   
         const titleRow = document.createElement('div');
         titleRow.classList = 'titlerow';
         titleRow.innerHTML = `<p style="text-transform: uppercase; font-size:1.35rem;">${library[i].title}</p>`;
         titleRow.innerHTML += `<button class="close" onclick="remove(${i})">X</button>`;
         card.appendChild(titleRow);
   
         const authorElement = document.createElement('p');
         authorElement.classList = 'aut';
         authorElement.style.alignSelf = 'start';
         authorElement.textContent = library[i].author;
         card.appendChild(authorElement);
   
         const pagesElement = document.createElement('p');
         pagesElement.style.alignSelf = 'start';
         pagesElement.textContent = `Pages red: ${library[i].pages}`;
         card.appendChild(pagesElement);
   
         const readElement = document.createElement('p');
         readElement.style.display="flex"
         readElement.style.justifyContent="space-around"
         readElement.innerHTML = library[i].read ? 'read' : 'not read';
         readElement.innerHTML += `<button onclick="toggleRead(${i})">Toggle</button>`
         card.appendChild(readElement);
   
         cards.appendChild(card);
      }
   }