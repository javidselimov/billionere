const inputName = document.querySelector('#name')
const inputAge = document.querySelector('#age')
const pName = document.querySelector('.name')
const pAge = document.querySelector('.age')
const button = document.querySelector('button')

let dummyData = {}

button.style.display = 'none'



inputAge.addEventListener('change',(e)=>{
   console.log(e.target.value)
   dummyData[e.target.name]=e.target.value
   
   button.style.display = (dummyData.age&&dummyData.name)?'block':"none"
 
})

inputName.addEventListener('change',(e)=>{
   console.log(e.target.value)
   dummyData[e.target.name]=e.target.value
    button.style.display = (dummyData.age&&dummyData.name)?'block':"none"
 
    
})

button.addEventListener('click',()=>{
    pAge.innerText = dummyData.age
    pName.innerText = dummyData.name
})




