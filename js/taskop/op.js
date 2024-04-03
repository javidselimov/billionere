let newElement = document.createElement('p');

newElement.textContent = 'Godzilla'
const divElement = document.querySelector('div')
const pFirst = document.querySelectorAll('p');
console.log(divElement.textContent)
console.log("--------------------")
console.log(divElement.innerText)



let massiv = [3,5,6,7]
massiv[0]


console.log(pFirst[1],"jjjjjj")

// divElement.insertBefore(newElement,pFirst)






// const heading = document.querySelector('h1');

// const pFirst = document.querySelector('p:first-child');

// const pgreen  = document.querySelectorAll('.green');



// pgreen.style.backgroundColor = 'green'

// console.log(heading)
// console.log(pFirst)
// console.log(pgreen)






























// console.log("Op task is running")

// class User{
//     constructor(id,name){
//        this.id = id
//        this.name = name
//     }
//     rename(name){
//         this.name=name
//     }
// }
// //  
// // const user = new User(1,"Javid");
// // user.rename("Divac")

// // console.log(user)

// class UserList{
//   constructor(){
//        this.users = []
//        this.currentId = 0
//     }

//     addUser(name){
//         const user = new User(this.currentId,name);
//         this.users.push(user)
//         this.currentId+=1
//     }

//     removeUser(id){
//      this.users = this.users.filter(user=>user.id!==id)
//     }

//     renameUser(id ,name){
//        const user =  this.users.find(user=>user.id===id)
//        user?.rename(name)
//     }

//     getAllUsersString(){
//       console.log( this.users.map(user=>user.name).join("; "))
//     }

// }

// // const userList = new UserList();

// // userList.addUser("Javid")
// // userList.addUser("Ilkin")
// // userList.addUser("Elcin")

// // userList.removeUser(0)
// // userList.renameUser(2,"Natiq");
// // userList.renameUser(3,"Natiq");

// // userList.getAllUsersString();

// class Application {
//    constructor(){
//       this.usersList = new UserList()
//     }
//     init(){
//         let isCollect = true;
//         while(isCollect){
//           const command = prompt(`
//           create Tom —  Tom adlı istifadəçi yaradılması; 
//           rename 0 Sam —  id = 0 olan istifadəçinin adının Sam adına dəyişdirilməsi; 
//           remove 0 —  id = 0 olan istifadəçinin silinməsi.
//           show  - listi goster.
//         `)

          
     
//           if(!command){
//             this.usersList.getAllUsersString()
//             isCollect = false
//             return
//           }
//           const commandArray = command.split(' ');
//           switch(commandArray[0]){
//             case "create": this.usersList.addUser(commandArray[1])
//                              this.usersList.getAllUsersString()
//                             break;
//             case "rename":  this.usersList.renameUser(+commandArray[1],commandArray[2]);
//                              break;
                               
//             case "remove":  this.usersList.removeUser(+commandArray[1])
//                             break;
//             case "show":  this.usersList.getAllUsersString()   
//                             break;  
//             default: this.usersList.getAllUsersString()  
//                        return 

//           }
//         }
//     }
// }

// const application  = new Application()

// application.init()