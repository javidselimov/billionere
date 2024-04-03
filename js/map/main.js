
// class Vehicle {

//   #count = 0
//   constructor(maxSpeed, color) {
//     this.maxSpeed = maxSpeed;
//     this.color = color;
//   }

//   add(){
//     this.#count+=1
//   }
// }


// let newObj = new Vehicle(100,'white');

// console.log(newObj)


// let obj = (()=>{
//     let data = 0

//     getData = ()=>{
//        return data
//     }

//     setData = (value)=>{
//        data = value
//     }
//     return {getData, setData}
// })()

// // console.log(obj.getData())
// obj.setData(500)
// console.log(obj.getData())












// class Vehicle {
//   constructor(maxSpeed, color) {
//     this.maxSpeed = maxSpeed;
//     this.color = color;
//   }
// }

// class Car extends Vehicle {
//   constructor(maxSpeed, color, mileage) {
//     super(maxSpeed, color);
//     this.mileage = mileage;
//   }
// }
// let car1 =  new Car (200,'white',1000000);

// console.log(car1)






// class User{
//     constructor(name,department,isAvailable,toggleAvailable,cool){
//    this.name = name
//    this.department = department
//    this.isAvailable = isAvailable
//    this.cool = cool
  
// }
// toggleAvailable(){
//     console.log(this)
// }
// }

// let user1  =  new User("EhmedAga","IT",true)
// let user2  =  new User("EhmedAga","IT",true)



// console.log(user1)



//  constructor function
// function User(name,department,isAvailable,toggleAvailable){
//    this.name = name
//    this.department = department
//    this.isAvailable = isAvailable
//    this.toggleAvailable = toggleAvailable
// }

// let user1  =  new User("EhmedAga","IT",true,function(){console.log(this)})



// //  Factory function

// function person (name,department,isAvailable,toggleAvailable){
//     return {
//             name,
//             department,
//             isAvailable,
//             toggleAvailable
//     }
// }

// const user2 = person("Ehmed","IT",true,function(){console.log(this)});
// const user2 = person("AgaEhmed","IT",true,function(){console.log(this)});

// // console.log(user1)
// // console.log(user2)
// user1.toggleAvailable()




























// let  player = {
//   'first name': 'Eric',
//   'last name': 'Cartman',
//   isPremium: true,
//   level: 14,
//   reletaion:{
//     name:"Megan"

//   },
//   getFullName(){
//      console.log(this['first name'])
//   },
//   getObj:()=>{
//     console.log(player['first name'])
//   }
// }

// player=7;


// let player = {
//   'first name': 'Eric',
//   'last name': 'Cartman',
//   isPremium: true,
//   level: 14,
//   reletaion:{
//     name:"Megan"
//   },
//   getFullName(){
//      console.log(this['first name'])
//   },
//   getObj:()=>{
//     console.log(player['first name'])
//   }
// }

// player.getObj();

// player.getFullName()


// const secondPlayer = {...player}

// player.reletaion.name = 'Fox'

// // player.status = true

// console.log(secondPlayer === player)
// // console.log(player2 === player)
// console.log(secondPlayer)














// let myClass = [
//  {name:"Ilkin Kerimov",
//     age:19
// },
//  {name: "Javid Salimov",
//     age:35
// },
//  {name:  "Elcin Hasanov",
//      age:18
// },
// ]






// let  dummyObject = {
//   name:"Javid",
//   age:35,
//   getFullName(){
//     return "Javid Salimov"
//   }
// }


// dummyObject.lastName = 'Salimov'



// let dummyObject2 = new Object();

// dummyObject2.name = "Elxan";

// dummyObject2.age=34;

// dummyObject2.getFullName = ()=>"Elxan Shirinov"



// console.log(dummyObject,"1")
// console.log(dummyObject2,"2")































// let myNumber = 5;

// Number.prototype.toString = ()=>100;

// let a = myNumber.toString();

// console.log(a)



// map funksiyasina benzer funksiya callback 
// alacaq array alacaq geriye yeni array qaytaracaq 
// veya array almayan formada da yazmaq olar

// Funksiyanin mueyyen edilmesi

// funksiya callback ve array parametr olaraq almalidir

// Array.prototype.map = map

// function map(callback){
//     let returnArray =[];
//     for(let index in this){
//         let newValue =  callback(this[index],index)
//         returnArray.push(newValue)
//     }
//   //   geiye array qaytar
//   return returnArray
// }



// let dummy = function(item,index){
//     return item*5
// }

// let testValue = map(dummy,arrayOfNumbers);

// console.log(arrayOfNumbers.map(dummy));


// Array.prototype.axmaqMap = mapation

// // let arrayOfNumbers=[1,2,3,4,5];
// function mapation(callback){
//     let returnArray =[];
//     for(let index in this){
//         let value =  callback(this[index],index)
//           if( !isNaN(this[index])){
//             returnArray.push(value)
//           }
       
//     }
//   return returnArray
// }


// let secondArray = [2,3,4];
// let dummy = function(item,index){
//     return {
//        value: item*5,
//        index
//     }
// }
// // let element = secondArray.map((item)=>item*2)
// let element2 = secondArray.axmaqMap(dummy)

// // console.log(element)
// console.log(element2)








// let massiveForTest = [[[1],[]],1,3,4,5];

// let shallowCopy = [...massiveForTest];

// let deepCopy = JSON.parse(JSON.stringify(massiveForTest));

// // deepCopy.push("JINJA");
// // deepCopy[0].push("JINJA");

// shallowCopy[0][0].push("AAAAAAAA");

// // shallowCopy.push('1');

// console.log({massiveForTest});
// console.log({shallowCopy});
// console.log({deepCopy});


// console.log(shallowCopy[0][0],'wfwef')
