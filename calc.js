function getHistory(){
    return document.getElementsById("hisval").innerText
}
function printHistory(num){
    return document.getElementsById("hisval").inneHTML=num    
}
function getOutput(){
    return document.getElementsById("outval").innerText
}function printOutput(num){
   if(num==""){
    document.getElementsById("outval").innerHTML=num
    
   }
   else{
    document.getElementsById("outval").innerHTML=getformatnumber(num)
   }
}
function getformatnumber(num){
    if(num=="-"){
        return ""
    }
    var n = Number(num)
    var val = n.toLocaleString("en")



}

function reverseformat(num){
    return Number(num.replace(/,/g,""))
}