let  player = {
  'first name': 'Eric',
  'last name': 'Cartman',
  isPremium: true,
  level: 14,
  reletaion:{
    name:"Megan"
    
  },
  getFullName(){
     console.log(this['first name'])
  },
  getObj:()=>{
    console.log(player['first name'])
  }
}

player=7;


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







