// İstifadəçiyə hər hansı bir mövzuda 4 cavabdan birini seçməli üç sual verin.
// Bütün sualların cavabı düzgündürsə, "Siz qalib gəldiniz", suala səhv cavab olduqda - "Siz məğlub oldunuz" xəbərdarlığı göstərin.

let questions = [
"4 + 4 = ? a)2 b)3 c)8 d)6 e)50/50 f)bitir-c-4 + 4 = ? b)3 c)8-4 + 4 = ? a)2 b)3 c)8 d)6",
"1 + 5 = ? a)10 b)3 c)8 d)6 e)50/50 f)bitir-d-1 + 5 = ? a)10 d)6-1 + 5 = ? a)10 b)3 c)8 d)6",
"3 + 4 = ? a)2 b)7 c)8 d)6 e)50/50 f)bitir-b-4 + 4 = ? b)7 c)8-3 + 4 = ? a)2 b)7 c)8 d)6",
]

function milioner(){
     let counter = 0;
     let triedFifty = false;
     let progress = '';
     let benefit = 0;
     for (let index in questions ){
        let questionArray = questions[index].split("-");
        let quest = questionArray[0];
        let trueAnswer = questionArray[1];
        let fifty = questionArray[2];
        let withOutFifty = questionArray[3]
        let userAnswer = prompt(`${quest} ${progress}`);
            // console.log(trueAnswer);
       if(userAnswer===trueAnswer){
          counter+=1;
          progress += "*";
          console.log(+index);
          benefit += (1+ +index)*100;
          alert(`Tebrik Edirem dogru cavab ${progress}`)
       }else if(triedFifty){
         userAnswer = prompt(`siz artiq istifade etmisiz \n ${withOutFifty} ${progress}`)
          if(userAnswer===trueAnswer){
          counter+=1
          progress += "*"
          benefit+= (1+index)*100;
          alert(`Tebrik Edirem dogru cavab ${progress}`)
       }
       }
       else if(userAnswer==='e'&&!triedFifty){
         triedFifty=true
         userAnswer = prompt(`${fifty} ${progress}`);
          if(userAnswer===trueAnswer){
          counter+=1
          progress += "*"
            benefit+= (1+index)*100;
           alert(`Tebrik Edirem dogru cavab ${progress}`)
       }
       }else if(userAnswer==='f'){
          alert(`Təbrik edirəm,siz qalib oldunuz! ${progress} ${benefit}AZN qazandiniz`); 
          return
       }    
     }
     if(counter===questions.length){
        alert(`Təbrik edirəm,siz qalib oldunuz! ${progress} ${benefit}AZN qazandiniz`);  
     }else{
        alert(`Təbrik edirəm,siz meglub oldunuz! ${progress}  ${benefit}AZN qazandiniz`);
     }

     
   
}

milioner()
