let salary = [
    [60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60, 60],
    [75, 75, 75, 75, 75, 75, 70, 77, 75, 75, 70, 75],
    [150, 151, 152, 150, 150, 150, 150, 150, 150, 150, 150, 185],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 105, 105, 105, 105, 105],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 80, 120],
    [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65],
    [80, 80, 80, 80, 80, 80, 80, 90, 90, 90, 90, 90],
    [75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 70, 75],
];

// function getAnnualSalary (){
//    return salary.map(employe=>{
//     return employe.reduce((total,element)=>total+element,0)
//    }).reduce((total,element)=>total+element,0)
// }

// console.log(getAnnualSalary())

// function getMonthlySalary(month){
//  let start = month-1

//  return salary.map(item=>{
//      return item[start]
//  })

// }
// console.log( getMonthlySalary(8))

function getQuarterSalary(quarter){
     let start = (quarter-1)*3;
     let end = ((quarter-1)*3)+3
     return salary.map((item)=>{
      return item.slice(start,end).reduce((total,element)=>total+element,0)
   }).reduce((total,element)=>total+element,0)
 
}



console.log(getQuarterSalary(4) )



















// const danceArray = ["Kizombo","Tango","Samba","Qaytağı","Nəlbəki"];

// danceArray.forEach((item)=> console.log(item))




















// const arr = [1, 2, 3, 4, 5];



// function callback(item, index) {
//   console.log(`${item} - bu, ${index} indeksli elementin dəyəridir `);
// }

// callback("Javid",1)

// arr.forEach(callback);

// arr.forEach((item,index)=>{
//     console.log(`${item} - bu, ${index} indeksli elementin dəyəridir `);
// })



// function callback(item, index) {
//   console.log(`${item} - bu, ${index} indeksli elementin dəyəridir `);
// }

// let myForeachFunction = (arrayList,call)=>{
//    for(let i = 0;i<arrayList.length;i++){
//      call(arrayList[i],i)
//    }
// }

// myForeachFunction(arr,callback)





// const danceArray = ["Kizombo","Tango","Samba","Qaytağı","Nəlbəki"];

// const copyDanceArray = [...danceArray];
// const [first,...other] = danceArray;

// copyDanceArray.push("break-dance");

// console.log(danceArray);

// const dance2Array = ["Kizombo","Tango","Samba","Qaytağı","Nəlbəki"];

// const secondDancesArray = danceArray

// console.log(secondDancesArray===danceArray); // true
// console.log(dance2Array===danceArray); //false
// console.log(dance2Array===secondDancesArray); //false

























// let massiveOfNames = ['Ayxan','Orxan','Turxan','Sarxan','Elxan'];
// let len =  massiveOfNames.length

// for (i = 0; i<len; i++){
//      console.log(massiveOfNames[i])
//      console.log(i)
// }
// console.log(i)

















// function dummy(){
//   1+1
// }

// let burda = console.log()
// console.log(burda);





// let text = 'Hello. World.';

// for (i = 0; i < text.length; i++) {
//   console.log(text[i]);
//   // Hello.

//   if (text[i] === '.') {
//     break;
//   }
// }


















// let isNotValid = true;
// let answer;

// while (isNotValid) {
//  answer = prompt("A daxil edin")

//  if(answer === "A"){
//   isNotValid=false;
//  }
// }






















// function diff(a, b) {
//   let c = a+b
//   return   function(d){
//      return c+d
//   }
// }

// let a = diff(6,3)(5)
// console.log(a)

// let name = a=>{
//     5 ;
//     console.log()
// }
