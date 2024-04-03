const inputName = document.querySelector('#name')
const inputAge = document.querySelector('#age')
const pName = document.querySelector('.name')
const pAge = document.querySelector('.age')
const pGender = document.querySelector('.gender')
const button = document.querySelector('button')
const selectBox = document.querySelector('select')
const subscribeCheckbox = document.querySelector('.subscribe');

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
    pGender.innerText = dummyData.gender
})

selectBox.addEventListener("change",(e)=>{
    console.log(e.target.value)
    dummyData[e.target.name]=e.target.value
})

subscribeCheckbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    alert(event.target.checked,'Siz abunə oldunuz');
  } else {
    alert('Siz abunə siyahısından çıxarılmısınız');
  }
});





