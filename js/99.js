function onesOrTens(number,isLong){
      switch(number){
       case '0':return ''
       case '1':return isLong?'on':'bir'
       case '2':return isLong?'iyirmi':'iki'
       case '3':return isLong?'otuz':'üç'
       case '4':return isLong?'qırx':'dörd'
       case '5':return isLong?'əlli':'beş'
       case '6':return isLong?'altmış':'altı'
       case '7':return isLong?'yetmiş':'yeddi'
       case '8':return isLong?'səksən':'səkkiz'
       case '9':return isLong?'doxsan':'doqquz'
    }
}
function numberToText(){
    let number = prompt("1den 99a kimi bir reqem daxil edin");
    if(!number || number.length>2){
       return
    }
    if(number.length===2){
        console.log(`${onesOrTens(number[0],true)} ${onesOrTens(number[1])}`)
    }else{
        console.log(`${onesOrTens(number)}`)
    }
}
numberToText();