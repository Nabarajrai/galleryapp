const div=document.querySelector("div");
const input=document.querySelector("input");
const button =document.querySelector("button");

const todos=[];
const isEditing =false;

console.log("todos",todos)
function render(){
    let html="<div></div>";
    todos.map((item,i)=>{   
        html +=`<ul>
        <li>${item.task}<button onclick="Delete(${item.id})" >delete</button> <button onclick="Edit(${item.id})">Edit</button></li>
        </ul>`
    })
    div.innerHTML=html;
   
}
render();
// function Edit(id){
//     console.log(tasks,"hello") 
//     isEditing=true;
//     todos.map((item,i)=>{
//         if(id==item.id){
//             isEditing==true ? <input/>:"";
//         }
//     })
// }
function Delete(id){
// todos.splice(id,1);
console.log("todos",todoss)

  render();  
}
function addTodo(){
let value=input.value;
value !=='' ? todos.push({id:Math.random(),task:value}): alert("input value");
console.log(todos)

render();
}
button.addEventListener("click",addTodo)
function Hellow(){
    console.log("scrolling....")

    
}
window.addEventListener("scroll",Hellow)