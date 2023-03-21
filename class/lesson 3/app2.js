{var a = 6}
console.log("a là ", a);


{let b=  6 
    console.log("b là", b);
}


const d = 8 
console.log(d);

//đối tượng
var person = {
    name : "Quốc",
    workplace : "Ly Thai To"
}
console.log(person.name);

var tempurature = 9
while(tempurature < 10 ){
    console.log("Mưa lạnh nghỉ sớm");
    tempurature += 1
}
    
// while(i < arr.length){
//     console.log(arr[1]);
//     i++
// }
var i = 0 

var arr = [23,23,22]
// đếm chẵn lẻ
var countEven = 0 
var countOdd = 0
while(i < arr.length){
    if(arr[i] % 2 == 0){
        countEven++
    } else{
        countOdd++
    }
    i++;
}
console.log("Số phần tử là số chẵn",countEven);
console.log("Số phần tử là số lẻ",countOdd);
